import numpy as np
from scipy.integrate import odeint
from scipy.optimize import minimize
t = []
S = []
def main():
    # Objective function weights
    w = np.array([0.5, 0.5])
    
    # Control variables' cost weights
    epsilon = np.array([0.1, 0.2, 0.3, 0.4])
    
    # Time parameters
    t0 = 0  # Initial time
    Tf = 10  # Final time
    
    # Optimization
    x0 = np.array([0.5, 0.5, 0.5, 0.5])  # Initial guesses for control variables u(1), u(2), u(3), u(4)
    bounds = [(0, 1), (0, 1), (0, 1), (0, 1)]  # Bounds for control variables u(1), u(2), u(3), u(4)
    result = minimize(objectiveFunction, x0, args=(w, epsilon, t0, Tf), bounds=bounds)
    u_optimal = result.x
    J_optimal = result.fun
    
    print(f"Optimal control variables: u(1) = {u_optimal[0]:.4f}, u(2) = {u_optimal[1]:.4f}, u(3) = {u_optimal[2]:.4f}, u(4) = {u_optimal[3]:.4f}")
    print(f"Optimal objective function value: {J_optimal:.4f}")

def objectiveFunction(u, w, epsilon, t0, Tf):
    # Set model parameters
    Lambda = 100
    beta = 0.2
    eta = 0.1
    mu = 0.01
    alpha = np.array([0.1, 0.1])
    gamma = 0.2
    psi = np.array([0.2, 0.2, 0.2, 0.2])
    theta = np.array([0.3, 0.3])
    tau = 0.1
    rho = 0.4
    delta = np.array([0.3, 0.3])
    
    S0 = 1000  # Initial value for S
    E0 = 100  # Initial value for E
    Iu0 = 10  # Initial value for Iu
    Id0 = 5  # Initial value for Id
    Q0 = 20  # Initial value for Q
    H0 = 15  # Initial value for H
    C0 = 8  # Initial value for C
    R0 = 50  # Initial value for R
    
    # Solve the system of differential equations
    t = np.linspace(t0, Tf, num=100)
    y0 = np.array([S0, E0, Iu0, Id0, Q0, H0, C0, R0])
    y = odeint(odefunc, y0, t, args=(u, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta))
    
    # Extract solution variables
    S = y[:, 0]
    E = y[:, 1]
    Iu = y[:, 2]
    Id = y[:, 3]
    Q = y[:, 4]
    H = y[:, 5]
    C = y[:, 6]
    R = y[:, 7]
    
    # Compute the integral part of the objective function
    dt = t[1] - t[0]  # Time step
    integrand = w[0] * Iu + w[1] * Id + 0.5 * (epsilon[0] * u[0]**2 + epsilon[1] * u[1]**2 + epsilon[2] * u[2]**2 + epsilon[3] * u[3]**2)
    
    # Plot the solution
    # import matplotlib.pyplot as plt

    # plt.figure()
    # plt.plot(t, S, 'r', linewidth=2)
    # plt.plot(t, E, 'g', linewidth=2)
    # plt.plot(t, Iu, 'b', linewidth=2)
    # plt.plot(t, Id, 'm', linewidth=2)
    # plt.plot(t, Q, 'c', linewidth=2)
    # plt.plot(t, H, 'y', linewidth=2)
    # plt.plot(t, C, 'k', linewidth=2)
    # plt.plot(t, R, color=[0.5, 0.5, 0.5], linewidth=2)
    # plt.xlabel('Time')
    # plt.ylabel('Population')
    # plt.legend(['S', 'E', 'Iu', 'Id', 'Q', 'H', 'C', 'R'])
    # plt.title('Population Dynamics')
    # plt.show()
    
    J = np.trapz(integrand, t)
    return J

def odefunc(y, t, u, Lambda, beta, eta, mu, alpha, gamma, psi, theta, tau, rho, delta):
    S = y[0]
    E = y[1]
    Iu = y[2]
    Id = y[3]
    Q = y[4]
    H = y[5]
    C = y[6]
    R = y[7]
    N = 10000  # Total population size
    
    dSdt = Lambda - ((1 - u[0]) * beta * (Id + eta * Iu) * S) / N - mu * S
    dEdt = ((1 - u[0]) * beta * (Id + eta * Iu) * S) / N - (alpha[0] + alpha[1] + mu) * E
    dIudt = alpha[0] * E - (u[1] * gamma + psi[0] + mu) * Iu
    dIddt = alpha[1] * E + u[1] * gamma * Iu - (u[2] * theta[0] + theta[1] + mu) * Id
    dQdt = u[2] * theta[0] * Id - (psi[1] + tau + mu) * Q
    dHdt = theta[1] * Id + tau * Q - (psi[2] + u[3] * rho + delta[0] + mu) * H
    dCdt = u[3] * rho * H - (psi[3] + delta[1] + mu) * C
    dRdt = psi[0] * Iu + psi[1] * Q + psi[2] * H + psi[3] * C - mu * R
    
    dydt = [dSdt, dEdt, dIudt, dIddt, dQdt, dHdt, dCdt, dRdt]
    return dydt


main()