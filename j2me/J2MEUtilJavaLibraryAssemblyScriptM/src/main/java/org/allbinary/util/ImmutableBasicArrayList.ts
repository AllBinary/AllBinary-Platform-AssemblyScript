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
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.logic.communication.log.ForcedLogUtil

@global export class ImmutableBasicArrayList extends BasicArrayListS {

    jclassName(): string {
        return "org.allbinary.util.ImmutableBasicArrayList";
    }
    name: string | null = null;

    jfields_ImmutableBasicArrayList(): void {
    
    }
    

    jinit_ImmutableBasicArrayList_2(name: string | null, size: i32): ImmutableBasicArrayList {
        super.jinit_BasicArrayListS_1(size);
        this.jfields_ImmutableBasicArrayList();
        this.name = name;
        return this;
    }
    

    add(e: Object | null): bool {
        ForcedLogUtil.log(this.name, this); if (JThrowable.pending !== null) return false;
        return true;
    }
    

    addAt(index: i32, element: Object | null): void {
        ForcedLogUtil.log(this.name, this); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return this.name;
    }
}

