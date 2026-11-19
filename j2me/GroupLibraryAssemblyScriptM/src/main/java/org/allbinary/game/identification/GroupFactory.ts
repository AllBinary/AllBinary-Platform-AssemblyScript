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
// package org.allbinary.game.identification
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GroupFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.identification.GroupFactory";
    }
    @lazy static jv_instance: GroupFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GroupFactory | null {
        if (!GroupFactory.js_instance) {
            GroupFactory.js_instance = true;
            GroupFactory.jv_instance = new GroupFactory().jinit_GroupFactory_0();
        }
        return GroupFactory.jv_instance;
    }
    static set instance(value: GroupFactory | null) {
        GroupFactory.js_instance = true;
        GroupFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    NULL_GROUP_ARRAY: StaticArray<Group | null> | null = null;
    list: BasicArrayList | null = null;
    index: i32 = 0;

    jfields_GroupFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.NULL_GROUP_ARRAY = new StaticArray<Group | null>(0);
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.index = 0;
    }

    jinit_GroupFactory_0(): GroupFactory {
        super.jinit_JObject_0();
        this.jfields_GroupFactory();
        return this;
    }
    

    static getInstance(): GroupFactory | null {
        return GroupFactory.instance;
    }
    

    getNextGroup(): Group | null {
        let group: Group | null = changetype<Group | null>(this.list!.objectArray![this.index]);
        this.index++;
        return group;
    }
    

    getNextGroupByName(name: string | null): Group | null {
        let group: Group | null = this.getNextGroup(); if (JThrowable.pending !== null) return null;
        group!.setName(name); if (JThrowable.pending !== null) return null;
        return group;
    }
    

    init(groups: i16, nameArray: StaticArray<string | null> | null): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return;
        let TEAM: string | null = "Team ";
        this.list!.clear(); if (JThrowable.pending !== null) return;
        this.index = 0;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        let name: string | null = null;
        while (size < (<i32>(groups))) {
            name = stringUtil!.EMPTY_STRING;
            if (size < nameArray!.length) {
                name = nameArray![size];
            } else {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                name = JObject.jtoString(stringMaker!.append(TEAM)!.appendint(size)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.list!.add(new Group().jinit_Group_2(name, (<i16>((size + 3))))); if (JThrowable.pending !== null) return;
            size++;
        } if (JThrowable.pending !== null) return;
    }
}

