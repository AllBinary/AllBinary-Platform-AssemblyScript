// Generated Code Do Not Modify
// package org.allbinary.graphics.form

@global export class ScreenInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.ScreenInfo";
    }
    @lazy static jv_instance: ScreenInfo | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenInfo | null {
        if (!ScreenInfo.js_instance) {
            ScreenInfo.js_instance = true;
            ScreenInfo.jv_instance = new ScreenInfo().jinit_ScreenInfo_0();
        }
        return ScreenInfo.jv_instance;
    }
    static set instance(value: ScreenInfo | null) {
        ScreenInfo.js_instance = true;
        ScreenInfo.jv_instance = value;
    }
    SMALL_WIDTH: i32 = 0;
    SMALL_HEIGHT: i32 = 0;
    MEDIUM_WIDTH: i32 = 0;
    MEDIUM_HEIGHT: i32 = 0;

    jfields_ScreenInfo(): void {
    this.SMALL_WIDTH = 320;
    this.SMALL_HEIGHT = 240;
    this.MEDIUM_WIDTH = 800;
    this.MEDIUM_HEIGHT = 600;
    }

    jinit_ScreenInfo_0(): ScreenInfo {
        super.jinit_JObject_0();
        this.jfields_ScreenInfo();
        return this;
    }
    

    static getInstance(): ScreenInfo | null {
        return ScreenInfo.instance;
    }
}

