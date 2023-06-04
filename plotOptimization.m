function main()
    global u_values;
    % Objective function weights
    w = [0.5, 0.5]; % w(1) and w(2)
    
    
    % Control variables' cost weights
    epsilon = [0.1, 0.2, 0.3, 0.4]; % epsilon(1), epsilon(2), epsilon(3), epsilon(4)
    
    % Time parameters
    t0 = 0; % Initial time
    Tf = 160; % Final time
    % Variable to store u values during each iteration;
    u_values = [];
    
    % Output function to collect u values
    outputFcn = @(x, optimValues, state) collectU(x, optimValues, state);
    
    % Function to collect u values
    function stop = collectU(x, ~, state)
        if isequal(state, 'iter')
            u_values = [u_values; x];
        end
        stop = false;
    end
    
    
    % Optimization
    options = optimoptions(@fmincon, 'Display', 'iter');
    % Set the 'OutputFcn' option in 'options' structure
    options.OutputFcn = outputFcn;
    x0 = [0.5, 0.5, 0.5, 0.5]; % Initial guesses for control variables u(1), u(2), u(3), u(4)
    lb = [0, 0, 0, 0]; % Lower bounds for control variables u(1), u(2), u(3), u(4)
    ub = [1, 0, 0, 0]; % Upper bounds for control variables u(1), u(2), u(3), u(4)
    [u_optimal, J_optimal] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub, [], options);
    
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal);
    fprintf('Optimal objective function value: %.6f\n', J_optimal);

    figure;
    plot(u_values);
    xlabel('Iteration');
    ylabel('Control Variable u');
    title('Variation of Control Variable u during Iterations');
     % Add labels for each line plotted
    legend('u(1)', 'u(2)', 'u(3)', 'u(4)');

     % Set model parameters
    Lambda = 24500;
    beta = 1.3295;
    eta = 0.5663;
    mu = 0.0161;
    alpha = [0.6, 0.4];
    gamma = 0.2070;
    psi = [0.3622, 0.0206, 0.5586, 0.01614];
    theta = [0.89976, 0.5];
    tau = 0.46030;
    rho = 0.75431;
    delta = [0.15, 0.22858];

    S0 = 60000000 - 1;  % Initial value for S
    E0 = 0;   % Initial value for E
    Iu0 = 0;   % Initial value for Iu
    Id0 = 1;    % Initial value for Id
    Q0 = 0;    % Initial value for Q
    H0 = 0;    % Initial value for H
    C0 = 0;     % Initial value for C
    R0 = 0;    % Initial value for R

    % Solve the system of differential equations
    [t, y] = ode45(@(t, y) odefunc(t, y, u_optimal, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    
    % Extract solution variables
    S = y(:, 1);
    E = y(:, 2);
    Iu = y(:, 3);
    Id = y(:, 4);
    Q = y(:, 5);
    H = y(:, 6);
    C = y(:, 7);
    R = y(:, 8);
    
    % Plot the variation of Iu and Id with respect to time
    figure;
    plot(t, Iu, 'b-', t, Id, 'r-', t, Q, 'y-');
    xlabel('Time');
    ylabel('Iu and Id');
    title('Variation of Iu and Id over Time - optimal u values');
    legend('Iu', 'Id', 'Q');
    

    % Solve the system of differential equations for custom values of u
    % u_non_optimal_example = [0.734909, 0, 0, 0 ];
    % [t2, y2] = ode45(@(t2, y2) odefunc(t2, y2, u_non_optimal_example, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    % 
    % % Extract solution variables
    % S = y2(:, 1);
    % E = y2(:, 2);
    % Iu2 = y2(:, 3);
    % Id2 = y2(:, 4);
    % Q = y2(:, 5);
    % H = y2(:, 6);
    % C = y2(:, 7);
    % R = y2(:, 8);
    % 
    % % Plot the variation of Iu and Id with respect to time
    % figure;
    % plot(t2, Iu2, 'b-', t2, Id2, 'r-', t2, Q, 'y-');
    % xlabel('Time');
    % ylabel('Iu and Id');
    % title('Variation of Iu and Id over Time - non optimal u values');
    % legend('Iu', 'Id', 'Q');

end

function J = objectiveFunction(u, w, epsilon, t0, Tf)
    % Set model parameters
    Lambda = 24500;
    beta = 1.3295;
    eta = 0.5663;
    mu = 0.0161;
    alpha = [0.6, 0.4];
    gamma = 0.2070;
    psi = [0.3622, 0.0206, 0.5586, 0.01614];
    theta = [0.89976, 0.5];
    tau = 0.46030;
    rho = 0.75431;
    delta = [0.15, 0.22858];
    
    S0 = 60000000 - 1;  % Initial value for S
    E0 = 0;   % Initial value for E
    Iu0 = 0;   % Initial value for Iu
    Id0 = 1;    % Initial value for Id
    Q0 = 0;    % Initial value for Q
    H0 = 0;    % Initial value for H
    C0 = 0;     % Initial value for C
    R0 = 0;    % Initial value for R
    
    % Solve the system of differential equations
    [t, y] = ode45(@(t, y) odefunc(t, y, u, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    
    % Extract solution variables
    S = y(:, 1);
    E = y(:, 2);
    Iu = y(:, 3);
    Id = y(:, 4);
    Q = y(:, 5);
    H = y(:, 6);
    C = y(:, 7);
    R = y(:, 8);
    % Compute the integral part of the objective function


    dt = t(2) - t(1); % Time step
    integrand = w(1)*Iu + w(2)*Id + 0.5*(epsilon(1)*u(1).^2 + epsilon(2)*u(2).^2 + epsilon(3)*u(3).^2 + epsilon(4)*u(4).^2);
  
    J = trapz(t, integrand);
end

function dydt = odefunc(t, y, u, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta)
    S = y(1);
    E = y(2);
    Iu = y(3);
    Id = y(4);
    Q = y(5);
    H = y(6);
    C = y(7);
    R = y(8);
    N = 60000000; % Total population size
    
    dSdt = Lambda - ((1 - u(1))*beta*(Id + eta*Iu)*S)/N - mu*S;
    dEdt = ((1 - u(1))*beta*(Id + eta*Iu)*S)/N - (alpha(1) + alpha(2) + mu)*E;
    dIudt = alpha(1)*E - (u(2)*gamma + psi(1) + mu)*Iu;
    dIddt = alpha(2)*E + u(2)*gamma*Iu - (u(3)*theta(1) + theta(2) + mu)*Id;
    dQdt = u(3)*theta(1)*Id - (psi(2) + tau + mu)*Q;
    dHdt = theta(2)*Id + tau*Q - (psi(3) + u(4)*rho + delta(1) + mu)*H;
    dCdt = u(4)*rho*H - (psi(4) + delta(2) + mu)*C;
    dRdt = psi(1)*Iu + psi(2)*Q + psi(3)*H + psi(4)*C - mu*R;
    
    dydt = [dSdt; dEdt; dIudt; dIddt; dQdt; dHdt; dCdt; dRdt];
end
