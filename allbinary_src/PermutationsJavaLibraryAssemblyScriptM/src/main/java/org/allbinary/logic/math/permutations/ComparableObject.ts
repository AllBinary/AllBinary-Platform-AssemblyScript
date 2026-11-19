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
// package org.allbinary.logic.math.permutations
// import org.allbinary.TsUtil

@global export class ComparableObject extends JObject implements JComparable {

    jclassName(): string {
        return "org.allbinary.logic.math.permutations.ComparableObject";
    }

    jinit_ComparableObject_0(): ComparableObject {
        super.jinit_JObject_0();
        return this;
    }
    

    compareTo(anyType: Object | null): i32 {
        if (TsUtil.getInstance()!.hashCode1(this) < TsUtil.getInstance()!.hashCode1(anyType)) {
            return -1;
        } else if (TsUtil.getInstance()!.hashCode1(this) > TsUtil.getInstance()!.hashCode1(anyType)) {
            return 1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
}

