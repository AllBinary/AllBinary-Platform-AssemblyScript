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
// import org.allbinary.util.BasicArrayListD

@global export class CurrentlyPressedTouchButtonSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.CurrentlyPressedTouchButtonSingleton";
    }
    @lazy static jv_instance: CurrentlyPressedTouchButtonSingleton | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CurrentlyPressedTouchButtonSingleton | null {
        if (!CurrentlyPressedTouchButtonSingleton.js_instance) {
            CurrentlyPressedTouchButtonSingleton.js_instance = true;
            CurrentlyPressedTouchButtonSingleton.jv_instance = new CurrentlyPressedTouchButtonSingleton().jinit_CurrentlyPressedTouchButtonSingleton_0();
        }
        return CurrentlyPressedTouchButtonSingleton.jv_instance;
    }
    static set instance(value: CurrentlyPressedTouchButtonSingleton | null) {
        CurrentlyPressedTouchButtonSingleton.js_instance = true;
        CurrentlyPressedTouchButtonSingleton.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_CurrentlyPressedTouchButtonSingleton(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): CurrentlyPressedTouchButtonSingleton | null {
        return CurrentlyPressedTouchButtonSingleton.instance;
    }
    

    jinit_CurrentlyPressedTouchButtonSingleton_0(): CurrentlyPressedTouchButtonSingleton {
        super.jinit_JObject_0();
        this.jfields_CurrentlyPressedTouchButtonSingleton();
        return this;
    }
    

    size(): i32 {
        return this.list!.size();
    }
    

    removeAt(index: i32): TouchButtonInput | null {
        return changetype<TouchButtonInput | null>(this.list!.removeAt(index));
    }
    

    remove(touchButtonInput: TouchButtonInput | null): bool {
        return this.list!.remove(touchButtonInput);
    }
    

    get(index: i32): TouchButtonInput | null {
        return changetype<TouchButtonInput | null>(this.list!.objectArray![index]);
    }
    

    contains(touchButtonInput: TouchButtonInput | null): bool {
        return this.list!.contains(touchButtonInput);
    }
    

    add(touchButtonInput: TouchButtonInput | null): void {
        this.list!.add(touchButtonInput); if (JThrowable.pending !== null) return;
    }
}

