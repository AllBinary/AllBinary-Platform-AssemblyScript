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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class Group extends JObject implements GroupInterface {

    jclassName(): string {
        return "org.allbinary.game.identification.Group";
    }
    name: string | null = null;
    teamId: i16 = 0;
    string: string | null = null;

    jfields_Group(): void {
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    
    this.string = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_Group_2(teamName: string | null, teamId: i16): Group {
        super.jinit_JObject_0();
        this.jfields_Group();
        this.teamId = teamId;
        this.setName(teamName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getGroupName(): string | null {
        return this.name;
    }
    

    setName(name: string | null): void {
        this.name = name;
        let groupCommonFactory: GroupCommonFactory | null = GroupCommonFactory.getInstance(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(groupCommonFactory!.GROUP_NAME_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.name); if (JThrowable.pending !== null) return;
        stringBuffer!.append(groupCommonFactory!.ID_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendshort(this.teamId); if (JThrowable.pending !== null) return;
        this.string = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return;
    }
    

    getGroupId(): i16 {
        return this.teamId;
    }
    

    toString(): string | null {
        return this.string;
    }
}

