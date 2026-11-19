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
// package org.allbinary.graphics.color
// import jsinterop.annotations.JsType
// import org.allbinary.util.CircularIndexUtil
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class BasicColorArrayIndexer extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColorArrayIndexer";
    }
    basicColorArray: StaticArray<BasicColor | null> | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;

    jfields_BasicColorArrayIndexer(): void {
    
    
    }
    

    jinit_BasicColorArrayIndexer_1(basicColorArray: StaticArray<BasicColor | null> | null): BasicColorArrayIndexer {
        super.jinit_JObject_0();
        this.jfields_BasicColorArrayIndexer();
        this.basicColorArray = basicColorArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.basicColorArray!.length); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    next(): void {
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    get(): BasicColor | null {
        return this.basicColorArray![this.circularIndexUtil!.getIndex()];
    }
    

    getBasicColorArray(): StaticArray<BasicColor | null> | null {
        return this.basicColorArray;
    }
}

