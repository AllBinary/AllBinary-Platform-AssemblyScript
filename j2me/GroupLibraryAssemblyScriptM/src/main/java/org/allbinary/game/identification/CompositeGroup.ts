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
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CompositeGroup extends JObject {

    jclassName(): string {
        return "org.allbinary.game.identification.CompositeGroup";
    }
    logUtil: LogUtil | null = null;
    groupInterface: Group | null = null;
    list: BasicArrayList | null = null;

    jfields_CompositeGroup(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_CompositeGroup_1(groupInterface: Group | null): CompositeGroup {
        super.jinit_JObject_0();
        this.jfields_CompositeGroup();
        this.groupInterface = groupInterface;
        return this;
    }
    

    clear(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    add(groupInterface: Group | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let groupCommonFactory: GroupCommonFactory | null = GroupCommonFactory.getInstance(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(groupCommonFactory!.ADDING_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.append(JObject.jtoString(groupInterface)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(groupCommonFactory!.TO_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.groupInterface)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.ADD); if (JThrowable.pending !== null) return;
        this.list!.add(groupInterface); if (JThrowable.pending !== null) return;
    }
    

    isInGroup(groupInterface: Group | null): bool {
        if (this.list!.contains(groupInterface)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getGroup(): Group | null {
        return this.groupInterface;
    }
}

