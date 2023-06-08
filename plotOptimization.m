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
    ub_1000 = [1, 0, 0, 0]; % Upper bounds for control variables u(1), u(2), u(3), u(4)
    ub_1100 = [1, 1, 0, 0];
    ub_1110 = [1, 1, 1, 0];
    ub_1111 = [1, 1, 1, 1];

    [u_optimal_1000, J_optimal_1000] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub_1000, [], options);
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal_1000);
    fprintf('Optimal objective function value: %.6f\n', J_optimal_1000);

    [u_optimal_1100, J_optimal_1100] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub_1100, [], options);
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal_1100);
    fprintf('Optimal objective function value: %.6f\n', J_optimal_1100);

    [u_optimal_1110, J_optimal_1110] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub_1110, [], options);
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal_1110);
    fprintf('Optimal objective function value: %.6f\n', J_optimal_1110);

    [u_optimal_1111, J_optimal_1111] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub_1111, [], options);
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal_1111);
    fprintf('Optimal objective function value: %.6f\n', J_optimal_1111);

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
    [t, y_1000] = ode45(@(t, y_1000) odefunc(t, y_1000, u_optimal_1000, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    [t2, y_1100] = ode45(@(t2, y_1100) odefunc(t2, y_1100, u_optimal_1100, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    [t3, y_1110] = ode45(@(t3, y_1110) odefunc(t3, y_1110, u_optimal_1110, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    [t4, y_1111] = ode45(@(t4, y_1111) odefunc(t4, y_1111, u_optimal_1111, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta), [t0, Tf], [S0, E0, Iu0, Id0, Q0, H0, C0, R0]);
    % Extract solution variables for u1=1, u2=u3=u4=0
    % S = y(:, 1);
    % E = y(:, 2);
    Iu_1000 = y_1000(:, 3);
    Id_1000 = y_1000(:, 4);
    % Q = y(:, 5);
    % H = y(:, 6);
    % C = y(:, 7);
    % R = y(:, 8);
    
    % Extract solution variables for u1=1, u2=1 ,u3=u4=0
    Iu_1100 = y_1100(:, 3);
    Id_1100 = y_1100(:, 4);
    
    % Extract solution variables for u1=1, u2=1 ,u3=1,u4=0
    Iu_1110 = y_1110(:, 3);
    Id_1110 = y_1110(:, 4);
    
    % Extract solution variables for u1=1, u2=1 ,u3=1,u4=1
    Iu_1111 = y_1111(:, 3);
    Id_1111 = y_1111(:, 4);
    
    %Plot for Iu
    figure;
    plot(t3, Iu_1110, 'k-.');
    hold on
    plot(t, Iu_1000, 'b-', 'Marker', 'x');
    hold on
    plot(t4, Iu_1111, 'g-');
    hold on
    plot(t2, Iu_1100, 'r-');
    %plot(t3, Iu_1110, 'y-', t4, Iu_1111, 'g-');
    xlabel('Time');
    ylabel('Iu_1000 and Iu_1100');
    title('Variation of Iu over Time - optimal u values');
    legend('Iu 1000', 'Iu 1100', 'Iu 1110', 'Iu 1111');
    
    %Plot for Id
    figure;
    plot(t3, Id_1110, 'k-.');
    hold on
    plot(t, Id_1000, 'b-', 'Marker', 'x');
    hold on
    plot(t4, Id_1111, 'g--');
    hold on
    plot(t2, Id_1100, 'r-');
    %plot(t3, Iu_1110, 'y-', t4, Iu_1111, 'g-');
    xlabel('Time');
    ylabel('Id_1000 - Id_1100 - Id_1110 - Id_1111');
    title('Variation of Iu over Time - optimal u values');
    legend('Iu 1000', 'Iu 1100', 'Iu 1110', 'Iu 1111');

    
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
