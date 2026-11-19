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
// import org.allbinary.logic.NullUtil

@global export class BasicGroupFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.identification.BasicGroupFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!BasicGroupFactory.js_instance) {
            BasicGroupFactory.js_instance = true;
            BasicGroupFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return BasicGroupFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        BasicGroupFactory.js_instance = true;
        BasicGroupFactory.jv_instance = value;
    }
    NAME: string | null = null;
    NO_SUCH_GROUP: string | null = null;
    GOOD: Group | null = null;
    ENEMY: Group | null = null;
    ENEMY_ON_LEVEL: Group | null = null;
    NONE: Group | null = null;
    GOOD_ARRAY: StaticArray<Group | null> | null = null;
    ENEMY_ARRAY: StaticArray<Group | null> | null = null;
    ENEMY_ON_LEVEL_ARRAY: StaticArray<Group | null> | null = null;
    NONE_ARRAY: StaticArray<Group | null> | null = null;

    jfields_BasicGroupFactory(): void {
    this.NAME = "GROUP_NAME";
    this.NO_SUCH_GROUP = "No Such Group: ";
    this.GOOD = new Group().jinit_Group_2("Good Guys", (<i16>(0)));
    this.ENEMY = new Group().jinit_Group_2("Bad Guys", (<i16>(1)));
    this.ENEMY_ON_LEVEL = new Group().jinit_Group_2("Bad Guys on Level", (<i16>(2)));
    this.NONE = new Group().jinit_Group_2("Not On A Team", (<i16>(3)));
    this.GOOD_ARRAY = StaticArray.fromArray<Group | null>([this.GOOD]);
    this.ENEMY_ARRAY = StaticArray.fromArray<Group | null>([this.ENEMY]);
    this.ENEMY_ON_LEVEL_ARRAY = StaticArray.fromArray<Group | null>([this.ENEMY, this.ENEMY_ON_LEVEL]);
    this.NONE_ARRAY = StaticArray.fromArray<Group | null>([this.NONE]);
    }

    jinit_BasicGroupFactory_0(): BasicGroupFactory {
        super.jinit_JObject_0();
        this.jfields_BasicGroupFactory();
        return this;
    }
    

    static getInstance(): BasicGroupFactory | null {
        if (BasicGroupFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            BasicGroupFactory.instance = new BasicGroupFactory().jinit_BasicGroupFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicGroupFactory | null>(BasicGroupFactory.instance);
    }
}

