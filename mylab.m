close

flag1=0;
flag2=0;
flag3=0;
flag4=0;
flag5=0;
var1=0;
var2=0;
var3=0;
var4=0;
var5=0;
    
while(flag1==0)    
    var1 = input('Enter a value for Lambda: ');
    if(var1>=0)
        Lambda = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: Lambda must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for beta: ');
    if(var1>=0)
        beta = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: beta must be positive')
        disp('         ')
    end
end
flag1=0;
disp('            ')
while(flag1==0)    
    var1 = input('Enter a value for eta: ');
    if(var1>=0)
        eta = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: eta must be positive')
        disp('         ')
    end
end
flag1=0;
disp('           ')
while(flag1==0)    
    var1 = input('Enter a value for mu: ');
    if(var1>=0)
        mu = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: mu must be positive')
        disp('         ')
    end
end
flag1=0;
disp('              ')
while(flag1==0)    
    var1 = input('Enter a value for alpha1: ');
    if(var1>=0)
        alpha1 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: alpha1 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for alpha2: ');
    if(var1>=0)
        alpha2 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: alpha2 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for gamma: ');
    if(var1>=0)
        gamma = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: gamma must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for psi1: ');
    if(var1>=0)
        psi1 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: psi1 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value psi2: ');
    if(var1>=0)
        psi2 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: psi2 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for psi3: ');
    if(var1>=0)
        psi3 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: psi3 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for psi4: ');
    if(var1>=0)
        psi4 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: psi4 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for theta1: ');
    if(var1>=0)
       theta1= var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: theta1 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for theta2: ');
    if(var1>=0)
       theta2 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: theta2 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for tau: ');
    if(var1>=0)
        tau = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: tau must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for rho: ');
    if(var1>=0)
        rho = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: rho must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for delta1: ');
    if(var1>=0)
        delta1 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: delta1 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
    var1 = input('Enter a value for delta2: ');
    if(var1>=0)
        delta2 = var1;
        flag1=1;
    else
        disp('        ')
        disp('ERROR: delta2 must be positive')
        disp('         ')
    end
end
flag1=0;
disp('         ')
while(flag1==0)    
   var1 = input('Enter a value for eta: ');
   if(var1>= 1.5)
       eta = var1;
      flag1=1;
  else
      disp('        ')
       disp('ERROR: eta must be greater than 1')
       disp('         ')
   end
end
flag1=0;
disp('         ')
while(flag1==0)
    while(flag2==0)
        var2 = input('Enter an initial number of susceptibles  (x_10): ');
        if( var2 >=0 )
            x10 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_10 must be positive')
            disp('        ')
        end
    end
    flag2=0;
    disp('          ')
    while(flag2==0)
        var2 = input('Enter an initial number of exposed  (x_20): ');
        if( var2 >=0 )
            x20 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_20 must be positive')
            disp('        ')
        end
    end
    flag2=0;
    disp('          ')
    while(flag2==0)
        var2 = input('Enter an initial number of infected asymptomatic (x_30): ');
        if(var2>=0)
            x30 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_30 must be positive')
            disp('        ')
        end
    end
    flag2=0;
    disp('        ')
    while(flag2==0)
        var2 = input('Enter an initial number of infected symptomatic (x_40): ');
        if((var2>=0))
            x40 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_40 must be positive')
            disp('        ')
        end
    end
   flag2=0;
   disp('        ')
   while(flag2==0)
        var2 = input('Enter an initial number of quarantined (x_50): ');
        if( var2>=0 )
            x50 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_50 must be positive')
            disp('        ')
        end
   end
  flag2=0;
  disp('        ')
  while(flag2==0)
        var2 = input('Enter an initial number of hospitalized (x_60): ');
        if((var2>=0))
            x60 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_60 must be positive')
            disp('        ')
        end
  end
  flag2=0;
  disp('        ')
  while(flag2==0)
        var2 = input('Enter an initial  number of intensive care unit persons (x_70): ');
        if((var2>=0))
            x70 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_70 must be positive')
            disp('        ')
        end
        
  end
    flag2=0;
  disp('        ')
  while(flag2==0)
        var2 = input('Enter an initial  number of recovered individuals (x_80): ');
        if((var2>=0))
            x80 = var2;
            flag2=1;
        else
            disp('        ')
            disp('ERROR: x_80 must be positive')
            disp('        ')
        end
        
  end
   if(x10 + x20 + x30 + x40 + x50 + x60 + x70 + x80 <= 1000)
        flag1=1;
    else
        disp('      ')
        disp('ERROR: sum of initial conditions must be less than or equal to 1000.')
        disp('         ')
        flag2=0;
    end
end  
flag2=0;
disp('        ')
while(flag2==0)
    var2 = input('Enter a value for the weight parameter omega1: ');
    if(var2>0)
        omega1 = var2;
        flag2=1;
    else
        disp('        ')
        disp('ERROR: omega1 must be positive')
        disp('        ')
    end
end
flag2=0;
disp('          ')
while(flag2==0)
    var2 = input('Enter a value for the weight parameter omega2: ');
    if(var2>0)
        omega2 = var2;
        flag2=1;
    else
        disp('        ')
        disp('ERROR: omega2 must be positive')
        disp('        ')
    end
end
flag2=0;
disp('          ')
while(flag2==0)
    var2 = input('Enter a value for the weight parameter omega3: ');
    if(var2>0)
        omega3 = var2;
        flag2=1;
    else
        disp('        ')
        disp('ERROR: omega3 must be positive')
        disp('        ')
    end
end
flag2=0;
disp('          ')
while(flag2==0)
    var2 = input('Enter a value for the weight parameter omega4: ');
    if(var2>0)
        omega4 = var2;
        flag2=1;
    else
        disp('        ')
        disp('ERROR: omega4 must be positive')
        disp('        ')
    end
end
flag2=0;
disp('          ')
while(flag2==0)
    var2 = input('How long would you like to run this system: ');
    if(var2>0)
        T=var2;
        flag2=1;
    else
        disp('        ')
        disp('ERROR: T must be positive.')
        disp('         ')
    end
end
disp('              ')
disp('One moment please...')
y1= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
disp('               ')
while(flag3==0)
    disp('Would you like to plot')
    disp('   1. Susceptible')
    disp('   2. Exposed')
    disp('   3. Infected asymptomatic')
    disp('   4. Infected symptomatic ')
    disp('   5. Quarantined ')
    disp('   6. Hospitalized ')
    disp('   7. Intensive Care Unit ')
    disp('   8. Recovered ')
    disp('   9. Preventive strategy efforts')
    disp('   9. Mass testing and screening')
    disp('   10. Quarantining')
    disp('   11. Intense medical care')
    disp('   12. all controls')
    disp('   13. all variables')
    var3=input('Type 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12 or 13: ');

    if((var3==1) | (var3==2) | (var3==3) | (var3==4) | (var3==5) | (var3==6)| (var3==7) | (var3==8) | (var3==9) | (var3==10) | (var3==11) | (var3==12) | (var3==13))
        flag3=1;
        disp('         ')
        while(flag4==0)
            disp('Would you like to vary any parameter?')
            disp('1. Yes')
            disp('2. No')
            var4=input('Type 1 or 2: ');
            
            if(var4==1)
                disp('         ')
                flag4=1;
                while(flag5==0)
                    disp('Which parameter would you like to vary?')
                    disp('1. Lambda')
                    disp('2. beta')
                    disp('3. eta')
                    disp('4. mu')
                    disp('5. alpha1')
                    disp('6. alpha2')
                    disp('7. gamma')
                    disp('8. psi1')
                    disp('9. psi2')
                    disp('10. psi3')
                    disp('11. psi4')
                    disp('12. theta1')
                    disp('13. theta2')
                    disp('14. tau')
                    disp('15. rho')
                    disp('16. delta1')
                    disp('17. delta2')
                    disp('18. x_10')
                    disp('19. x_20')
                    disp('20. x_30')
                    disp('21. x_40')
                    disp('22. x_50')
                    disp('23. x_60')
                    disp('24. x_70')
                    disp('25. x_80')
                    disp('26. omega1')
                    disp('27. omega2')
                    disp('28. omega3')
                    disp('29. omega4')
                    var5=input('Type 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 or 29:');
                    if(var5==1)
                        disp('        ')
                        Lambda2=input('Enter a second Lambda value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda2, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                    elseif(var5==2)
                        disp('        ')
                        beta2=input('Enter a second beta value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta2, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;   
                    elseif(var5==3)
                        disp('        ')
                        eta2=input('Enter a second eta value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta2, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;   
                    elseif(var5==4)
                        disp('        ')
                        mu2=input('Enter a second mu value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu2, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;   
                    elseif(var5==5)
                        disp('        ')
                        alpha12=input('Enter a second alpha1 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha12, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==6)
                        disp('        ')
                        alpha22=input('Enter a second alpha2 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha22, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==7)
                        disp('        ')
                        gamma2=input('Enter a second gamma value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma2, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==8)
                        disp('        ')
                        psi12=input('Enter a second psi1 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi12, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                    elseif(var5==9)
                        disp('        ')
                        psi22=input('Enter a second psi2 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi22, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                   elseif(var5==10)
                        disp('        ')
                        psi32=input('Enter a second psi3 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi32, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                    elseif(var5==11)
                        disp('        ')
                        psi42=input('Enter a second psi4 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi42, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==12)
                        disp('        ')
                        theta12=input('Enter a second theta1 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta12, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==13)
                        disp('        ')
                        theta22=input('Enter a second theta2 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta22, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                     elseif(var5==14)
                        disp('        ')
                        tau2=input('Enter a second tau value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau2, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                        elseif(var5==15)
                        disp('        ')
                        rho2=input('Enter a second rho value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho2, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                        elseif(var5==16)
                        disp('        ')
                        delta12=input('Enter a second delta1 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho2, delta12, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                        elseif(var5==17)
                        disp('        ')
                        delta22=input('Enter a second delta2 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho2, delta1, delta22, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;
                    elseif(var5==18)
                        disp('        ')
                        x102=input('Enter a second x_10 value: ');
                        disp('            ')
                        disp('One moment please...')
                       y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x102, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;   
                    elseif(var5==19)
                        disp('        ')
                        x202=input('Enter a second x_20 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x202, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1;  
                    elseif(var5==20)
                        disp('        ')
                        x302=input('Enter a second x_30 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x302, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1; 
                     elseif(var5==21)
                        disp('        ')
                        x402=input('Enter a second x_40 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x402, x50, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1; 
                      elseif(var5==22)
                        disp('        ')
                        x502=input('Enter a second x_50 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x502, x60, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1; 
                    elseif(var5==23)
                        disp('        ')
                        x602=input('Enter a second x_60 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x602, x70, x80, omega1, omega2, omega3, omega4, T);
                        flag5=1; 
                    elseif(var5==24)
                        disp('        ')
                        x702=input('Enter a second x_70 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x702, x80, omega1, omega2, omega3, omega4, T);
                  elseif(var5==25)
                        disp('        ')
                        x802=input('Enter a second x_80 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x702, x802, omega1, omega2, omega3, omega4, T);
                        flag5=1;         

                    elseif(var5==26)
                        disp('        ')
                        omega12=input('Enter a second omega1 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega12, omega2, omega3, omega4, T);
                        flag5=1; 
                    elseif(var5==27)
                        disp('        ')
                        omega22=input('Enter a second omega2 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega22, omega3, omega4, T);
                        flag5=1; 
                    elseif(var5==28)
                        disp('        ')
                        omega32=input('Enter a second omega3 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega32, omega4, T);
                        flag5=1;
                     elseif(var5==29)
                        disp('        ')
                        omega42=input('Enter a second omega4 value: ');
                        disp('            ')
                        disp('One moment please...')
                        y2= lab(Lambda, beta, eta, mu, alpha1, alpha2, gamma, psi1, psi2, psi3, psi4, theta1, theta2, tau, rho, delta1, delta2, x10, x20, x30, x40, x50, x60, x70, x80, omega1, omega2, omega3, omega42, T);
                        flag5=1;       
                    else
                        disp('         ')
                        disp('Pardon?')
                        disp('           ')
                    end
                end
            
            elseif(var4==2)
                disp('            ')
                flag4=1;
                if(var3==1)
                    plot(y1(1,:),y1(2,:))
                    xlabel('Time')
                    ylabel('Susceptible')
                elseif(var3==2)
                    plot(y1(1,:),y1(3,:))
                    xlabel('Time')
                    ylabel('Exposed')
                elseif(var3==3)
                    plot(y1(1,:),y1(4,:))
                    xlabel('Time')
                    ylabel('Infected asymptomatic')
                elseif(var3==4)
                    plot(y1(1,:),y1(5,:))
                    xlabel('Time')
                    ylabel('Infected symptomatic') 
                elseif(var3==5)
                    plot(y1(1,:),y1(6,:))
                    xlabel('Time')
                    ylabel('Quarantined')
                elseif(var3==6)
                    plot(y1(1,:),y1(7,:))
                    xlabel('Time')
                    ylabel('Hospitalized')
              elseif(var3==7)
                    plot(y1(1,:),y1(8,:))
                    xlabel('Time')
                    ylabel('Intensive Care Unit') 
              elseif(var3==8)
                    plot(y1(1,:),y1(9,:))
                    xlabel('Time')
                    ylabel('Recovered')
               elseif(var3==9)
                    plot(y1(1,:),y1(10,:))
                    xlabel('Time')
                    ylabel('Preventive strategy efforts')    
             elseif(var3==10)
                    plot(y1(1,:),y1(11,:))
                    xlabel('Time')
                    ylabel(' Mass testing and screening') 
            elseif(var3==11)
                    plot(y1(1,:),y1(12,:))
                    xlabel('Time')
                    ylabel('Quarantining')
             elseif(var3==12)
                    plot(y1(1,:),y1(13,:))
                    xlabel('Time')
                    ylabel('Intense medical care')       
            elseif(var3==13)
                    subplot(3,1,1);plot(y1(1,:),y1(10,:))
                    subplot(3,1,1);xlabel('Time')
                    subplot(3,1,1);ylabel('control1')
                    subplot(3,1,2);plot(y1(1,:),y1(11,:))
                    subplot(3,1,2);xlabel('Time')
                    subplot(3,1,2);ylabel('control2')
                    subplot(3,1,3);plot(y1(1,:),y1(12,:))
                    subplot(3,1,3);xlabel('Time')
                    subplot(3,1,3);ylabel('control3') 
                    subplot(3,1,4);plot(y1(1,:),y1(13,:))
                    subplot(3,1,4);xlabel('Time')
                    subplot(3,1,4);ylabel('control4')
             elseif(var3==14)
                    subplot(10,1,1);plot(y1(1,:),y1(2,:))
                    subplot(10,1,1);xlabel('Time')
                    subplot(10,1,1);ylabel('Susceptible')
                    subplot(10,1,2);plot(y1(1,:),y1(3,:))
                    subplot(10,1,2);xlabel('Time')
                    subplot(10,1,2);ylabel('Exposed')
                    subplot(10,1,3);plot(y1(1,:),y1(4,:))
                    subplot(10,1,3);xlabel('Time')
                    subplot(10,1,3);ylabel('Infected asymptomatic')
                    subplot(10,1,4);plot(y1(1,:),y1(5,:))
                    subplot(10,1,4);xlabel('Time')
                    subplot(10,1,4);ylabel('Infected symptomatic')
                    subplot(10,1,5);plot(y1(1,:),y1(6,:))
                    subplot(10,1,5);xlabel('Time')
                    subplot(10,1,5);ylabel('Quarantined') 
                    subplot(10,1,6);plot(y1(1,:),y1(7,:))
                    subplot(10,1,6);xlabel('Time')
                    subplot(10,1,6);ylabel('Hospitalized')
                    subplot(10,1,7);plot(y1(1,:),y1(8,:))
                    subplot(10,1,7);xlabel('Time')
                    subplot(10,1,7);ylabel('Intensive Care Unit')
                    subplot(10,1,8);plot(y1(1,:),y1(9,:))
                    subplot(10,1,8);xlabel('Time')
                    subplot(10,1,8);ylabel('Recovered')
                    subplot(10,1,9);plot(y1(1,:),y1(10,:))
                    subplot(10,1,9);xlabel('Time')
                    subplot(10,1,9);ylabel('control1')
                    subplot(10,1,10);plot(y1(1,:),y1(11,:))
                    subplot(10,1,10);xlabel('Time')
                    subplot(10,1,10);ylabel('control2')
                    subplot(10,1,11);plot(y1(1,:),y1(12,:))
                    subplot(10,1,11);xlabel('Time')
                    subplot(10,1,11);ylabel('control3')
                    subplot(10,1,12);plot(y1(1,:),y1(13,:))
                    subplot(10,1,12);xlabel('Time')
                    subplot(10,1,12);ylabel('control4')
                end
                
            else
                disp('           ')
                disp('Pardon?')
                disp('            ')
            end
        end
        
    else 
        disp('     ')
        disp('Pardon?')
        disp('          ')
    end
end

if(var4==1)
    if(var3==1)
        plot(y1(1,:),y1(2,:),'b',y2(1,:),y2(2,:),'g')
        xlabel('Time')
        ylabel('Susceptible')
        legend('First value','Second value',0)
    elseif(var3==2)
        plot(y1(1,:),y1(3,:),'b',y2(1,:),y2(3,:),'g')
        xlabel('Time')
        ylabel('Exposed')
        legend('First value','Second value',0)
    elseif(var3==3)
        plot(y1(1,:),y1(4,:),'b',y2(1,:),y2(4,:),'g')
        xlabel('Time')
        ylabel('Infected asymptomatic')
        legend('First value','Second value',0)
    elseif(var3==4)
        plot(y1(1,:),y1(5,:),'b',y2(1,:),y2(5,:),'g')
        xlabel('Time')
        ylabel('Infected symptomatic')
        legend('First value','Second value',0)
   elseif(var3==5)
        plot(y1(1,:),y1(6,:),'b',y2(1,:),y2(6,:),'g')
        xlabel('Time')
        ylabel('Quarantined')
        legend('First value','Second value',0)
   elseif(var3==6)
        plot(y1(1,:),y1(7,:),'b',y2(1,:),y2(7,:),'g')
        xlabel('Time')
        ylabel('Hospitalized')
        legend('First value','Second value',0)  
   elseif(var3==7)
        plot(y1(1,:),y1(8,:),'b',y2(1,:),y2(8,:),'g')
        xlabel('Time')
        ylabel('Intensive Care Unit')
        legend('First value','Second value',0)
    elseif(var3==8)
        plot(y1(1,:),y1(9,:),'b',y2(1,:),y2(9,:),'g')
        xlabel('Time')
        ylabel('Recovered')
        legend('First value','Second value',0)    
    elseif(var3==9)
        plot(y1(1,:),y1(10,:),'b',y2(1,:),y2(10,:),'g')
        xlabel('Time')
        ylabel('Preventive strategy efforts')
        legend('First value','Second value',0)
     elseif(var3==10)
        plot(y1(1,:),y1(11,:),'b',y2(1,:),y2(11,:),'g')
        xlabel('Time')
        ylabel('Mass testing and screening')
        legend('First value','Second value',0) 
    elseif(var3==11)
        plot(y1(1,:),y1(12,:),'b',y2(1,:),y2(12,:),'g')
        xlabel('Time')
        ylabel('Quarantining')
        legend('First value','Second value',0) 
     elseif(var3==12)
        plot(y1(1,:),y1(13,:),'b',y2(1,:),y2(13,:),'g')
        xlabel('Time')
        ylabel('Intense medical care')
        legend('First value','Second value',0)   
    elseif(var3==13)
        
                    subplot(10,1,1);plot(y1(1,:),y1(2,:),'b',y2(1,:),y2(2,:),'g')
                    subplot(10,1,1);xlabel('Time')
                    subplot(10,1,1);ylabel('Susceptible')
                    subplot(10,1,2);plot(y1(1,:),y1(3,:),'b',y2(1,:),y2(3,:),'g')
                    subplot(10,1,2);xlabel('Time')
                    subplot(10,1,2);ylabel('Exposed')
                    subplot(10,1,3);plot(y1(1,:),y1(4,:),'b',y2(1,:),y2(4,:),'g')
                    subplot(10,1,3);xlabel('Time')
                    subplot(10,1,3);ylabel('Infected asymptomatic')
                    subplot(10,1,4);plot(y1(1,:),y1(5,:),'b',y2(1,:),y2(5,:),'g')
                    subplot(10,1,4);xlabel('Time')
                    subplot(10,1,4);ylabel('Infected symptomatic')
                    subplot(10,1,5);plot(y1(1,:),y1(6,:),'b',y2(1,:),y2(6,:),'g')
                    subplot(10,1,5);xlabel('Time')
                    subplot(10,1,5);ylabel('Quarantined') 
                    subplot(10,1,6);plot(y1(1,:),y1(7,:),'b',y2(1,:),y2(7,:),'g')
                    subplot(10,1,6);xlabel('Time')
                    subplot(10,1,6);ylabel('Hospitalized')
                    subplot(10,1,7);plot(y1(1,:),y1(8,:),'b',y2(1,:),y2(8,:),'g')
                    subplot(10,1,7);xlabel('Time')
                    subplot(10,1,7);ylabel('Intensive Care Unit')
                    subplot(10,1,8);plot(y1(1,:),y1(9,:),'b',y2(1,:),y2(9,:),'g')
                    subplot(10,1,8);xlabel('Time')
                    subplot(10,1,8);ylabel('Recovered')
                    subplot(10,1,9);plot(y1(1,:),y1(10,:),'b',y2(1,:),y2(10,:),'g')
                    subplot(10,1,9);xlabel('Time')
                    subplot(10,1,9);ylabel('Preventive strategy efforts')
                    subplot(10,1,10);plot(y1(1,:),y1(11,:),'b',y2(1,:),y2(11,:),'g')
                    subplot(10,1,10);xlabel('Time')
                    subplot(10,1,10);ylabel('Mass testing and screening')
                    subplot(10,1,11);plot(y1(1,:),y1(12,:),'b',y2(1,:),y2(12,:),'g')
                    subplot(10,1,11);xlabel('Time')
                    subplot(10,1,11);ylabel('Quarantining') 
                    subplot(10,1,12);plot(y1(1,:),y1(13,:),'b',y2(1,:),y2(13,:),'g')
                    subplot(10,1,12);xlabel('Time')
                    subplot(10,1,12);ylabel('Intense medical care')
    end
end