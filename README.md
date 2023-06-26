# alarm-clock-javascipt
alarm clock works for only one day


please enter time in "hh:mm:ss am/pm" format
hh {0, 24}
mm {0, 59}
ss {0, 59}

html file contain ->
1. realtime working clock that shows current time
2. alarm creation templet containing alarm-title, alarm-time, and a create alarm button
3. a list of alarms


javascipt functions ->
1. to maintain realtime clock i have use
  a. getCurrentTime() - to get current time
  b. setRealTimeClock() - to set current time in realtime working work on wep-page
  c. time interval function to update time in every 1s of time
  
2. to add alarm i have use
  a. addAlarm() - to make alarm object and add it to array
  b. createAlarm() - make timeout function to alert user on alarm time
  c. validateTime() - validate time and return alarm object
  
3. to delete alarm i have use
  a. deleteAlarm() - function to delete alarm and clear timeout
  
4. to render a list of alarm
  a. renderList() - by using alarms array i created a list of alarm items and inject in web-page
