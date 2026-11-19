/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.time
// import java.util.Calendar

@global export class TimeUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.time.TimeUtil";
    }
    @lazy static jv_instance: TimeUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TimeUtil | null {
        if (!TimeUtil.js_instance) {
            TimeUtil.js_instance = true;
            TimeUtil.jv_instance = new TimeUtil().jinit_TimeUtil_0();
        }
        return TimeUtil.jv_instance;
    }
    static set instance(value: TimeUtil | null) {
        TimeUtil.js_instance = true;
        TimeUtil.jv_instance = value;
    }
    @lazy static jv_calendar: JCalendar | null = null;
    @lazy static js_calendar: bool = false;
    static get calendar(): JCalendar | null {
        if (!TimeUtil.js_calendar) {
            TimeUtil.js_calendar = true;
            TimeUtil.jv_calendar = JCalendar.getInstance();
        }
        return TimeUtil.jv_calendar;
    }
    static set calendar(value: JCalendar | null) {
        TimeUtil.js_calendar = true;
        TimeUtil.jv_calendar = value;
    }

    jinit_TimeUtil_0(): TimeUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): TimeUtil | null {
        return TimeUtil.instance;
    }
    

    setCalendar(calendar: JCalendar | null, yearString: string | null, monthString: string | null, dayString: string | null, hourString: string | null): void {
        let year: i32 = new JInteger().jinit_JInteger_1(yearString)!.intValue(); if (JThrowable.pending !== null) return;
        let month: i32 = new JInteger().jinit_JInteger_1(monthString)!.intValue(); if (JThrowable.pending !== null) return;
        let day: i32 = new JInteger().jinit_JInteger_1(dayString)!.intValue(); if (JThrowable.pending !== null) return;
        let hour: i32 = new JInteger().jinit_JInteger_1(hourString)!.intValue(); if (JThrowable.pending !== null) return;
        calendar!.set5(year, month, day, hour, 0); if (JThrowable.pending !== null) return;
    }
    

    setCalendarWithTime(calendar: JCalendar | null, yearString: string | null, monthString: string | null, dayString: string | null, hourString: string | null, minuteString: string | null, secondString: string | null): void {
        let year: i32 = new JInteger().jinit_JInteger_1(yearString)!.intValue(); if (JThrowable.pending !== null) return;
        let month: i32 = new JInteger().jinit_JInteger_1(monthString)!.intValue(); if (JThrowable.pending !== null) return;
        let day: i32 = new JInteger().jinit_JInteger_1(dayString)!.intValue(); if (JThrowable.pending !== null) return;
        let hour: i32 = new JInteger().jinit_JInteger_1(hourString)!.intValue(); if (JThrowable.pending !== null) return;
        let minute: i32 = new JInteger().jinit_JInteger_1(minuteString)!.intValue(); if (JThrowable.pending !== null) return;
        let second: i32 = new JInteger().jinit_JInteger_1(secondString)!.intValue(); if (JThrowable.pending !== null) return;
        calendar!.set6(year, month, day, hour, minute, second); if (JThrowable.pending !== null) return;
    }
    

    setExpirationCalendar(calendar: JCalendar | null, yearsString: string | null, monthsString: string | null, daysString: string | null, hoursString: string | null, minutesString: string | null, secondsString: string | null): void {
        let year: i32 = calendar!.get(JCalendar.YEAR) + new JInteger().jinit_JInteger_1(yearsString)!.intValue(); if (JThrowable.pending !== null) return;
        let month: i32 = calendar!.get(JCalendar.MONTH) + new JInteger().jinit_JInteger_1(monthsString)!.intValue(); if (JThrowable.pending !== null) return;
        let day: i32 = calendar!.get(JCalendar.DAY_OF_MONTH) + new JInteger().jinit_JInteger_1(daysString)!.intValue(); if (JThrowable.pending !== null) return;
        let hour: i32 = calendar!.get(JCalendar.HOUR) + new JInteger().jinit_JInteger_1(hoursString)!.intValue(); if (JThrowable.pending !== null) return;
        let minute: i32 = calendar!.get(JCalendar.MINUTE) + new JInteger().jinit_JInteger_1(minutesString)!.intValue(); if (JThrowable.pending !== null) return;
        let second: i32 = calendar!.get(JCalendar.SECOND) + new JInteger().jinit_JInteger_1(secondsString)!.intValue(); if (JThrowable.pending !== null) return;
        calendar!.set6(year, month, day, hour, minute, second); if (JThrowable.pending !== null) return;
    }
    

    getTotalTime(yearString: string | null, monthString: string | null, dayString: string | null, hourString: string | null, minuteString: string | null, secondString: string | null): i64 {
        let time: i64 = TimeUtil.calendar!.getTimeInMillis(); if (JThrowable.pending !== null) return 0;
        this.setExpirationCalendar(TimeUtil.calendar, yearString, monthString, dayString, hourString, minuteString, secondString); if (JThrowable.pending !== null) return 0;
        let timeDelta: i64 = TimeUtil.calendar!.getTimeInMillis(); if (JThrowable.pending !== null) return 0;
        return timeDelta - time;
    }
}

