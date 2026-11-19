/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.game.identification
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory

@global export class GroupCommonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.identification.GroupCommonFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GroupCommonFactory.js_instance) {
            GroupCommonFactory.js_instance = true;
            GroupCommonFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GroupCommonFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GroupCommonFactory.js_instance = true;
        GroupCommonFactory.jv_instance = value;
    }
    ID: JInteger | null = null;
    GROUP_NAME_LABEL: string | null = null;
    ID_LABEL: string | null = null;
    ADDING_LABEL: string | null = null;
    TO_LABEL: string | null = null;

    jfields_GroupCommonFactory(): void {
    this.ID = SmallIntegerSingletonFactory.getInstance()!.getAt(10);
    this.GROUP_NAME_LABEL = "Group Name: ";
    this.ID_LABEL = " Id: ";
    this.ADDING_LABEL = "Adding: ";
    this.TO_LABEL = " to: ";
    }

    jinit_GroupCommonFactory_0(): GroupCommonFactory {
        super.jinit_JObject_0();
        this.jfields_GroupCommonFactory();
        return this;
    }
    

    static getInstance(): GroupCommonFactory | null {
        if (GroupCommonFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GroupCommonFactory.instance = new GroupCommonFactory().jinit_GroupCommonFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GroupCommonFactory | null>(GroupCommonFactory.instance);
    }
}

