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
// package org.allbinary.graphics
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class RelativeRelationship extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.RelativeRelationship";
    }
    @lazy static jv_NULL_RELATIVE_RELATIONSHIP: RelativeRelationship | null = null;
    @lazy static js_NULL_RELATIVE_RELATIONSHIP: bool = false;
    static get NULL_RELATIVE_RELATIONSHIP(): RelativeRelationship | null {
        if (!RelativeRelationship.js_NULL_RELATIVE_RELATIONSHIP) {
            RelativeRelationship.js_NULL_RELATIVE_RELATIONSHIP = true;
            RelativeRelationship.jv_NULL_RELATIVE_RELATIONSHIP = new RelativeRelationship().jinit_RelativeRelationship_2(PointFactory.getInstance()!.ZERO_ZERO, BasicArrayListUtil.getInstance()!.getImmutableInstance());
        }
        return RelativeRelationship.jv_NULL_RELATIVE_RELATIONSHIP;
    }
    static set NULL_RELATIVE_RELATIONSHIP(value: RelativeRelationship | null) {
        RelativeRelationship.js_NULL_RELATIVE_RELATIONSHIP = true;
        RelativeRelationship.jv_NULL_RELATIVE_RELATIONSHIP = value;
    }
    typesAllowedList: BasicArrayList | null = null;
    x: i32 = 0;
    y: i32 = 0;
    z: i32 = 0;

    jfields_RelativeRelationship(): void {
    
    
    
    
    }
    

    jinit_RelativeRelationship_2(point: GPoint | null, typesAllowedList: BasicArrayList | null): RelativeRelationship {
        super.jinit_JObject_0();
        this.jfields_RelativeRelationship();
        this.x = point!.getX(); if (JThrowable.pending !== null) return this;
        this.y = point!.getY(); if (JThrowable.pending !== null) return this;
        this.z = point!.getZ(); if (JThrowable.pending !== null) return this;
        this.typesAllowedList = typesAllowedList;
        return this;
    }
    

    getX(): i32 {
        return this.x;
    }
    

    getY(): i32 {
        return this.y;
    }
    

    getZ(): i32 {
        return this.z;
    }
    

    getTypesAllowedList(): BasicArrayList | null {
        return this.typesAllowedList;
    }
    

    setTypesAllowedList(typesAllowedList: BasicArrayList | null): void {
        this.typesAllowedList = typesAllowedList;
    }
}

