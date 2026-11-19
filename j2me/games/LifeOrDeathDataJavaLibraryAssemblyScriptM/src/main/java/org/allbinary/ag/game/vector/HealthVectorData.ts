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
// package org.allbinary.ag.game.vector

@global export class HealthVectorData extends JObject {

    jclassName(): string {
        return "org.allbinary.ag.game.vector.HealthVectorData";
    }
    @lazy static jv_points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    @lazy static js_points: bool = false;
    static get points(): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        if (!HealthVectorData.js_points) {
            HealthVectorData.js_points = true;
            HealthVectorData.jv_points = StaticArray.fromArray<StaticArray<StaticArray<i32> | null> | null>([StaticArray.fromArray<StaticArray<i32> | null>([StaticArray.fromArray<i32>([2, 1]), StaticArray.fromArray<i32>([3, 2]), StaticArray.fromArray<i32>([3, 2]), StaticArray.fromArray<i32>([4, 1]), StaticArray.fromArray<i32>([4, 1]), StaticArray.fromArray<i32>([5, 1]), StaticArray.fromArray<i32>([5, 1]), StaticArray.fromArray<i32>([6, 2]), StaticArray.fromArray<i32>([6, 2]), StaticArray.fromArray<i32>([6, 3]), StaticArray.fromArray<i32>([6, 3]), StaticArray.fromArray<i32>([3, 6]), StaticArray.fromArray<i32>([3, 6]), StaticArray.fromArray<i32>([0, 3]), StaticArray.fromArray<i32>([0, 3]), StaticArray.fromArray<i32>([0, 2]), StaticArray.fromArray<i32>([0, 2]), StaticArray.fromArray<i32>([1, 1]), StaticArray.fromArray<i32>([1, 1]), StaticArray.fromArray<i32>([2, 1]), StaticArray.fromArray<i32>([1000, 1000])])]);
        }
        return HealthVectorData.jv_points;
    }
    static set points(value: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null) {
        HealthVectorData.js_points = true;
        HealthVectorData.jv_points = value;
    }

    jinit_HealthVectorData_0(): HealthVectorData {
        super.jinit_JObject_0();
        return this;
    }
}

