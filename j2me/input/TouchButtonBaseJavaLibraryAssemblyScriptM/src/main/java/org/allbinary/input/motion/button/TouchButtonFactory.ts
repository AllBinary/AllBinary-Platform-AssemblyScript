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
// package org.allbinary.input.motion.button
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class TouchButtonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonFactory";
    }
    @lazy static jv_SINGLETON: TouchButtonFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): TouchButtonFactory | null {
        if (!TouchButtonFactory.js_SINGLETON) {
            TouchButtonFactory.js_SINGLETON = true;
            TouchButtonFactory.jv_SINGLETON = new TouchButtonFactory().jinit_TouchButtonFactory_0();
        }
        return TouchButtonFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: TouchButtonFactory | null) {
        TouchButtonFactory.js_SINGLETON = true;
        TouchButtonFactory.jv_SINGLETON = value;
    }
    LIST: BasicArrayList | null = null;
    list: BasicArrayList | null = null;
    savedList: BasicArrayList | null = null;
    saved: bool = false;

    jfields_TouchButtonFactory(): void {
    this.LIST = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    this.list = this.LIST;
    this.savedList = this.LIST;
    this.saved = false;
    }
    

    static getInstance(): TouchButtonFactory | null {
        return TouchButtonFactory.SINGLETON;
    }
    

    jinit_TouchButtonFactory_0(): TouchButtonFactory {
        super.jinit_JObject_0();
        this.jfields_TouchButtonFactory();
        return this;
    }
    

    defaultList(): void {
        this.list = this.LIST;
        this.toggle(false, this.LIST); if (JThrowable.pending !== null) return;
    }
    

    toggle(save: bool, list: BasicArrayList | null): void {
        if (list != BasicArrayListUtil.getInstance()!.getImmutableInstance()) {
            this.savedList = list;
            if (!this.saved) {
                this.list = this.savedList;
            }
        } else {
            if (save) {
                if (!this.saved) {
                    this.saved = true;
                    this.savedList = this.list;
                    this.list = this.LIST;
                } else {
                }
            } else {
                this.list = this.savedList;
                this.saved = false;
            }
        } if (JThrowable.pending !== null) return;
    }
    

    setList(list: BasicArrayList | null): void {
        if (list == null) {
            { JThrowable.raise(new JException().jinit_JException_1("Null List")); return; }
        } if (JThrowable.pending !== null) return;
        this.list = list;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

