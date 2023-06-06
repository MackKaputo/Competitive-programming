
x  = lab2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
fprintf("\n =============================\n");
disp(x);
function y = lab2(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T)

    delta = 0.1;
    test1 = delta + 1;
    test2 = delta + 1;
    test3 = delta + 1;
    test4 = delta + 1; % Need to check this!
    h=T/1000;
    t=linspace(0,T,1001);
    
    x1=zeros(1,1001);
    x2=zeros(1,1001);
    x3=zeros(1,1001);
    x4=zeros(1,1001);
    x5=zeros(1,1001);
    x6=zeros(1,1001);
    x7=zeros(1,1001);
    x8=zeros(1,1001);
    x1(1)=x10;
    x2(1)=x20;
    x3(1)=x30;
    x4(1)=x40;
    x5(1)=x50;
    x6(1)=x60;
    x7(1)=x70;
    x8(1)=x80;
    lambda1=zeros(1,1001);
    lambda2=zeros(1,1001);
    lambda3=zeros(1,1001);
    lambda4=zeros(1,1001);
    lambda5=zeros(1,1001);
    lambda6=zeros(1,1001);
    lambda7=zeros(1,1001);
    lambda8=zeros(1,1001);
    u1=zeros(1,1001)+0.5;
    u2=zeros(1,1001)+0.5;
    u3=zeros(1,1001)+0.5;
    u4=zeros(1,1001)+0.5;
    while(test1 > delta | test2 > delta | test3 > delta | test4 > delta)
        
        oldu1 = u1;
        oldu2 = u2;
        oldu3 = u3;
        oldu4 = u4;
        for i=1:1000
            m1 = Lambda - ((1-u1)*beta*( x4(i) + eta*x3(i))/( x1(i) + x2(i) + x3(i) +  x4(i) + x5(i) + x6(i)+ x7(i) + x8(i))  + mu)*x1(i);
            m2 = (1-u1)*beta*( x4(i) + eta*x3(i))/( x1(i) + x2(i) + x3(i) +  x4(i) + x5(i) + x6(i) + x7(i) + x8(i))*x1(i) - (alpha1 + alpha2 + mu)*x2(i) ;
            m3 = alpha1*x2(i) - (u2*gamma + psi1 + mu)*x3(i);
            m4 = alpha2*gamma*x2(i) + u2*gamma*x3(i) - (u3*theta1 + theta2 + mu)*x4(i);
            m5 =  u3*theta1*x4(i) - (psi2 + tau + mu)*x5(i);
            m6 = theta2*x4(i) + tau*x5(i) - (psi3 + u4*rho + delta1 + mu)*x6(i);
            m7 = u4*rho*x4(i) - (psi4 + delta2 + mu)*x7(i);
            m8 = psi1*x3(i) + psi2*x5(i) + psi3*x6(i) + psi4*x7 - mu*x8(i);
           
            fprintf("size(x1(i+1)): %s\n", mat2str(size(x1(i+1))));
            fprintf("size(x1(i) + h*m1): %s\n", mat2str(size(x1(i) + h*m1)));
            x1(i+1) = x1(i) + h*m1(i);
            x2(i+1) = x2(i) + h*m2(i);
            x3(i+1) = x3(i) + h*m3(i);
            x4(i+1) = x4(i) + h*m4(i);
            x5(i+1) = x5(i) + h*m5(i);
            x6(i+1) = x6(i) + h*m6(i);
            x7(i+1) = x7(i) + h*m7(i); 
            x8(i+1) = x8(i) + h*m8(i); 
        end
        
        for i=1:1000
            j=1001-i;
            m1 =  mu*lambda1(j+1) + (1-u1)*beta*( x4(j+1) + eta*x3( j+1))/( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1) )*(1- (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1) )))*(lambda1(j+1)-lambda2(j+1)) ;
            m2 = lambda2(j+1)*mu + alpha1*(lambda2(j+1) - lambda3(j+1)) + alpha2*(lambda2(j+1) - lambda4(j+1))- (1-u1)*beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1))*(lambda1(j+1) - lambda2(j+1))* (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)));
            m3 = lambda3(j+1)*mu + u2*gamma*(lambda3(j+1)- lambda4(j+1)) + psi1*(lambda3(j+1) - lambda8(j+1)) + (1-u1)*(lambda1(j+1) - lambda2(j+1))*( ( beta*eta / ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)))- beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1)+ x8(j+1) )^2 )*x1(j+1)-1 ; %w1=1
            m4 = lambda4(j+1)*mu + u3*theta1*(lambda4(j+1)- lambda5(j+1)) + theta2*(lambda4(j+1) - lambda6(j+1)) + (1-u1)*(lambda1(j+1) - lambda2(j+1))*( ( beta / ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)))- beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1)+ x8(j+1) )^2 )*x1(j+1)-1 ; %w2=1
            m5 = lambda5(j+1)*mu + psi2*(lambda5(j+1) - lambda8(j+1)) + tau*(lambda5(j+1) - lambda6(j+1)) + (1-u1)*beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1)) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1)+( x8(j+1))*(lambda1(j+1) - lambda2(j+1))* (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)));
            m6 = lambda6(j+1)*mu + u4*rho*(lambda6(j+1) - lambda7(j+1)) + psi3*(lambda6(j+1)- lambda8(j+1)) + delta1*lambda6(j+1) - (1-u1)*beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1))*(lambda1(j+1) - lambda2(j+1))* (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)));
            m7 = lambda7(j+1)*mu + psi4*(lambda7(j+1) - lambda8(j+1)) + delta2*lambda7(j+1) - (1-u1)*beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1))*(lambda1(j+1) - lambda2(j+1))* (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)));
            m8 = lambda8(j+1)*mu - (1-u1)*beta*(x4(j+1) + eta*x3(j+1))/(x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1))*(lambda1(j+1) - lambda2(j+1))* (x1(j+1)/ ( x1(j+1) + x2(j+1) + x3(j+1) +  x4(j+1) + x5(j+1) + x6(j+1) + x7(j+1) + x8(j+1)));
            
                    
            lambda1(j) = lambda1(j+1) - h*m1(i);
            lambda2(j) = lambda2(j+1) - h*m2(i);
            lambda3(j) = lambda3(j+1) - h*m3(i);
            lambda4(j) = lambda4(j+1) - h*m4(i);
            lambda5(j) = lambda5(j+1) - h*m5(i); 
            lambda6(j) = lambda6(j+1) - h*m6(i);
            lambda7(j) = lambda7(j+1) - h*m7(i);
            lambda8(j) = lambda8(j+1) - h*m8(i);
        end
        p = x1 + x2 + x3 +  x4 + x5 + x6 +x7 + x8;
        fprintf("Size of x1 + x2 + x3 +  x4 + x5 + x6 +x7 + x8  = %s \n", (mat2str(size(p))));
            
        %temp=(x1.*lambda1)./W;
        temp= beta*omega1*(lambda2 - lambda1).* (x4 + eta.*x3) ./ (x1 + x2 + x3 +  x4 + x5 + x6 +x7 + x8 ).* x1 ; %omega1=1/epsilon1
        ttemp= gamma*omega2*(lambda4 - lambda3).* x3 ; %omega2=1/epsilon2
        tttemp= theta1*omega3*(lambda5 - lambda4).*x4  ; %omega3=1/epsilon3
        ttttemp= rho*omega4*(lambda7 - lambda6).*x6; %omega4=1/epsilon4
        u11 = min(1,max(0,temp));
        u21 = min(1,max(0,ttemp));
        u31 = min(1,max(0,tttemp));
        u41 = min(1,max(0,ttttemp));
        u1 = 0.5*(u11 + oldu1);  
        u2 = 0.5*(u21 + oldu2);
        u3 = 0.5*(u31 + oldu3);
        u4 = 0.5*(u41 + oldu4);
        test1 = sum(abs(oldu1 - u11))
        test2 = sum(abs(oldu2 - u21))
        test3 = sum(abs(oldu3 - u31 ))
        test4 = sum(abs(oldu4 - u41 ))
        
    end

    y = [m1; m2; m3; m4; m5; m6; m7; m8];
end


% y(1,:)=t;
% y(2,:)=x1;
% y(3,:)=x2;
% y(4,:)=x3;
% y(5,:)=x4;
% y(6,:)=x5;
% y(7,:)=x6;
% y(8,:)=x7;
% y(9,:)=x8;
% y(10,:)=u1;
% y(11,:)=u2;
% y(12,:)=u3;
% y(13,:)=u4;