
function main()
    % Objective function weights
    w = [0.5, 0.5]; % w(1) and w(2)
    
    
    % Control variables' cost weights
    epsilon = [0.1, 0.2, 0.3, 0.4]; % epsilon(1), epsilon(2), epsilon(3), epsilon(4)
    
    % Time parameters
    t0 = 0; % Initial time
    Tf = 160; % Final time
    
    % Optimization
    options = optimoptions(@fmincon, 'Display', 'iter');
    x0 = [0.5, 0.5, 0.5, 0.5]; % Initial guesses for control variables u(1), u(2), u(3), u(4)
    lb = [0, 0, 0, 0]; % Lower bounds for control variables u(1), u(2), u(3), u(4)
    ub = [1, 1, 1, 1]; % Upper bounds for control variables u(1), u(2), u(3), u(4)
    [u_optimal, J_optimal] = fmincon(@(u) objectiveFunction(u, w, epsilon, t0, Tf), x0, [], [], [], [], lb, ub, [], options);
    
    fprintf('Optimal control variables: u(1) = %.6f, u(2) = %.6f, u(3) = %.6f, u(4) = %.6f\n', u_optimal);
    fprintf('Optimal objective function value: %.6f\n', J_optimal);
end

function J = objectiveFunction(u, w, epsilon, t0, Tf)
    % Set model parameters
    Lambda = 100;
    beta = 0.2;
    eta = 0.1;
    mu = 0.01;
    alpha = [0.1, 0.1];
    gamma = 0.2;
    psi = [0.2, 0.2, 0.2, 0.2];
    theta = [0.3, 0.3];
    tau = 0.1;
    rho = 0.4;
    delta = [0.3, 0.3];
    
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
