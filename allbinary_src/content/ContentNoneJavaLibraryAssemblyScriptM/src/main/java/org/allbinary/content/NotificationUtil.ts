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
// package org.allbinary.content
// import javax.microedition.lcdui.Command

@global export class NotificationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.content.NotificationUtil";
    }
    @lazy static jv_SINGLETON: NotificationUtil | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NotificationUtil | null {
        if (!NotificationUtil.js_SINGLETON) {
            NotificationUtil.js_SINGLETON = true;
            NotificationUtil.jv_SINGLETON = new NotificationUtil().jinit_NotificationUtil_0();
        }
        return NotificationUtil.jv_SINGLETON;
    }
    static set SINGLETON(value: NotificationUtil | null) {
        NotificationUtil.js_SINGLETON = true;
        NotificationUtil.jv_SINGLETON = value;
    }

    jinit_NotificationUtil_0(): NotificationUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): NotificationUtil | null {
        return NotificationUtil.SINGLETON;
    }
    

    notify(command: Command | null, resource: string | null, message: string | null): void {
    }
}

