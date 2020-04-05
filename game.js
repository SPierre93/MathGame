alert("Welcome to our Multiple-Choice Math game! There are 10 levels separated into 3 rounds. The first round will test your skills in addition, the second round will test your skills in subtraction and the third round will test your skills in division. For each question, you will be given two answers to choose from; one answer labelled 'A' and another labelled 'B'. Type the letter that matches the correct answer to win 50 points but if your answer is wrong you will lose 50 points. Don't worry though. If you fail to answer correctly you will be able to redo the level with a new question. In order to win, you must complete the game without using up your 4 chances. Good luck and have fun!");

const NAME_1 = prompt("Please enter your first name");
const NAME_2 = prompt("Please enter your last name");
const AGE = prompt("Please enter your age");

if(AGE < 8 || AGE > 11)
{
    alert(`Oh no! We're so sorry, ${NAME_1}, but you are not the correct age to play this game`);
}

else
{    
    let incorrect_count=0, correct_count=0, total_score=0, user_ans, results, i;
    const POINTS = 50;

    //ROUND 1: ADD ROUND
    for (i=1; i <= 4; i++) //i represents levels and iterations 
    {
        if(incorrect_count==4)
        {
           break;
        } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
        
        //Ensure randomly generated numbers do not repeat
        let num1 = 1 + Math.floor(Math.random()*25);
        let num2 = 1 + Math.floor(Math.random()*9);
        
        let correct_ans = num1 + num2;
        let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));
    
        //Randomise the 'A or B' choices
        let random_num = 1 + Math.floor(Math.random()*2);
        let ans_choices;
              
        if(random_num == 1)
        {
            ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
        }

        else
        {
            ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
        }

        user_ans = prompt(`${NAME_1} you are on Round 1, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}+${num2}: \n${ans_choices}`);
        
        if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
        {
            total_score+=POINTS;
            correct_count++;
            alert(`Score: ${total_score}`);
        }

        else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
        {
            do 
            {
                total_score-=POINTS;
                incorrect_count++;

                if(total_score < 0) //Maintain a minimum possible score of 0
                {
                    total_score = 0;
                }
                
                alert(`Score: ${total_score}`);
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
               
                //Same level, new questions loops
                num1 = 1 + Math.floor(Math.random()*25);
                num2 = 1 + Math.floor(Math.random()*9);
                
                correct_ans = num1 + num2;
                wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

                random_num = 1 + Math.floor(Math.random()*2);
                    
                if(random_num == 1)
                {
                    ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
                }

                else
                {
                    ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
                }
                
                user_ans = prompt(`${NAME_1} you are on Round 1, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}+${num2}: \n${ans_choices}`);    

                if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
                {
                    total_score+=POINTS;
                    correct_count++;
                    alert(`Score: ${total_score}`);
                }
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
            } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
        }
    }

    //ROUND 2: SUBTRACT ROUND
    for(i=1; i <= 4; i++) //i represents levels and iterations 
    {
        if(incorrect_count==4)
        {
           break;
        } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
        
        let num1, num2; 

        do //Ensure that the 2nd number is always less than the 1st
        {
            num1 = 1 + Math.floor(Math.random()*25);
            num2 = 1 + Math.floor(Math.random()*9);
        } while(num1 < num2);
        
        let correct_ans = num1 - num2;
        let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));
    
        //Randomise the 'A or B' choices
        let random_num = 1 + Math.floor(Math.random()*2);
        let ans_choices;
              
        if(random_num == 1)
        {
            ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
        }

        else
        {
            ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
        }

        user_ans = prompt(`${NAME_1} you are on Round 2, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}-${num2}: \n${ans_choices}`);
        
        if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
        {
            total_score+=POINTS;
            correct_count++;
            alert(`Score: ${total_score}`);
        }

        else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
        {
            do 
            {
                total_score-=POINTS;
                incorrect_count++;

                if(total_score < 0) //Maintain a minimum possible score of 0
                {
                    total_score = 0;
                }
                
                alert(`Score: ${total_score}`);
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
               
                //Same level, new questions loops
                num1 = 1 + Math.floor(Math.random()*25);
                num2 = 1 + Math.floor(Math.random()*9);

                do //Ensure that the 2nd number is always less than the 1st
                {
                    num1;
                    num2;
                } while(num1 < num2);
                
                correct_ans = num1 - num2;
                wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

                random_num = 1 + Math.floor(Math.random()*2);
                    
                if(random_num == 1)
                {
                    ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
                }

                else
                {
                    ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
                }
                
                user_ans = prompt(`${NAME_1} you are on Round 2, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}-${num2}: \n${ans_choices}`);    

                if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
                {
                    total_score+=POINTS;
                    correct_count++;
                    alert(`Score: ${total_score}`);
                }
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
            } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
        }
    }

    //ROUND 3: DIVIDE ROUND
    for (i=1; i <= 2; i++) //i represents levels and iterations 
    {
        if(incorrect_count==4)
        {
           break;
        } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
        
        let num1, num2;
        
        do //Ensures that the 1st number is divisible by the 2nd
        {  
            num1 = 1 + Math.floor(Math.random()*25);
            num2 = 2 + Math.floor(Math.random()*9);
        } while(num1%num2!=0);

        let correct_ans = num1 / num2;
        let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));
    
        //Randomise the 'A or B' choices
        let random_num = 1 + Math.floor(Math.random()*2);
        let ans_choices;
              
        if(random_num == 1)
        {
            ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
        }

        else
        {
            ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
        }

        user_ans = prompt(`${NAME_1} you are on Round 3, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}/${num2}: \n${ans_choices}`);
        
        if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
        {
            total_score+=POINTS;
            correct_count++;
            alert(`Score: ${total_score}`);
        }

        else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
        {
            do 
            {
                total_score-=POINTS;
                incorrect_count++;

                if(total_score < 0) //Maintain a minimum possible score of 0
                {
                    total_score = 0;
                }
                
                alert(`Score: ${total_score}`);
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
               
                //Same level, new questions loops
                do //Ensures that the 1st number is divisible by the 2nd
                {  
                    num1 = 1 + Math.floor(Math.random()*25);
                    num2 = 2 + Math.floor(Math.random()*9);
                } while(num1%num2!=0);
                
                correct_ans = num1 / num2;
                wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

                random_num = 1 + Math.floor(Math.random()*2);
                    
                if(random_num == 1)
                {
                    ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
                }

                else
                {
                    ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
                }
                
                user_ans = prompt(`${NAME_1} you are on Round 3, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}/${num2}: \n${ans_choices}`);    

                if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
                {
                    total_score+=POINTS;
                    correct_count++;
                    alert(`Score: ${total_score}`);
                }
                
                if(incorrect_count==4)
                {
                    alert(`Sorry ${NAME_1}, you have used all of your chances`);
                    break;
                }
            } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
        }
    }

    //End of game - results
    if(correct_count < 10)
    {
        results = "Lost";
    }

    else
    {
        results = "Won";
    }

    //End of game - report
    alert(`POST-GAME REPORT \nName: ${NAME_1} ${NAME_2} \nAge: ${AGE} \nScore: ${total_score} \nQuestions completed: ${correct_count} \nWon or lost: ${results}`);
}