# Grant's Multi-Dimensional To-Do List
Takes in task name, urgency, effort, importance, significance, and enjoyability as paramaters and sorts tasks based on an optimal weighting of these.

### Effort: How long will it take?
1. 1 minute of work
2. 5 minutes of work
3. 20 minutes of work
4. 1 hour of work
5. 3 hours of work
6. 10 hours of work
7. 30 hours of work
8. 150 hours of work
9. 1,000 hours of work
10. 10,000 hours of work

### Urgency: How soon does it matter?
1. No deadline
2. Years from now
3. Months
4. Weeks
5. Week
6. 3 Days
7. Tomorrow
8. Later today
9. Next hour
10. Within minutes

### Importance: How serious are the immediate consequences / rewards?
1. No consequence
2. Marginally worth doing
3. Would be good to do, but doesn’t really matter
4. Would be good to do
5. Should be done
6. Needs to be done
7. Seriously needs to be done
8. Will be ashamed if not done
8. Painful if not done
10. Life threatening

### Significance: How long will this matter? Will this multiply my time? Will this create more time for me?
1. Doesn’t
2. Hours
3. Days
4. Weeks
5. Months
6. A Year
7. Years
8. Decades
9. My lifetime
10. Many lifetimes

### Enjoyability
1. This is horrible. 
2. This kinda sucks.
3. I wouldn’t prefer to do this
4. I don’t mind doing the work 
5. I like doing the work.
6. This is fun.
7. This is great!
8. I love this!
9. I LOVE this!
10. This is my favorite thing in the world!

# Installation and Set Up
First, you need to make a MySQL database and table. Do this by running "php initializeSQL.php".
Second, run "php -S localhost:8000".
Third, open "http://localhost:8000/" in chrome.
Fourth, have fun.
