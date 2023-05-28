global T N x0 x1 % Global variables
T=1; N=20; %N Samples of the input u
x0=[0;0]; %initial condition for state variable
x1=[0;pi/3]; %final point
%lesu_init=rand(1,N); %initial input sequence guess
lesu_init=zeros(1,N); %initial input sequence guess

u_opt=fmincon(@cost3,lesu_init,[],[],[],[],[],[],@nonlcon);
%nonlcon=nonlinear constraints
[t,x]=ode45(@my_ode2,[0 T],x0,[],u_opt);

%% Graphs
figure()
hold on 
plot(t,x);
t2=(0:T/N:T);
umin2=[u_opt u_opt(:,end)];
stairs(0:T/N:T,umin2);
xlabel('temps')
legend('x1','x2','uoptimal');
hold off

%% differential equation
function xdot = my_ode2(t,x,lesu)
         u=udet2(t,lesu);
         xdot=zeros(2,1);
         xdot(1)=u;
         xdot(2)=sqrt(1+u^2);
end

%% one way of construction of vector u
function vector =udet2(t,lesu)
        global T N
        a=N*t/T;
  if a==0
      vector=lesu(:,1);
  else
      vector=lesu(:,abs(ceil(a)));
  end
end


%% cost function we want to minimize

function J2 = cost3(lesu)
        global T x0
        [t,x]=ode45(@my_ode2,[0 T],x0,[],lesu);
        % approximation by trapezium integration in MATLAB
        J2=trapz(t,x(:,1));
end


%% go from x(0)=[0 0] to x(1)=x(final)=[0 pi/3]

function [c,ceq]=nonlcon(lesu)
        global T x0
        [t,x]=ode45(@my_ode2,[0 T],x0,[],lesu);
        n=length(x);
        x1=x(:,1)';x2=x(:,2)';
        c=[]; %we don't have inequality constraints
        ceq(1)=x1(n); %equality constraint
        ceq(2)=x(2); %equality constraint
        ceq=ceq';
end