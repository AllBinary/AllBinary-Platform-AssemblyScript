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
// package org.allbinary.game.ag.vector

@global export class MineVectorData extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.vector.MineVectorData";
    }
    @lazy static jv_points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    @lazy static js_points: bool = false;
    static get points(): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        if (!MineVectorData.js_points) {
            MineVectorData.js_points = true;
            MineVectorData.jv_points = StaticArray.fromArray<StaticArray<StaticArray<i32> | null> | null>([StaticArray.fromArray<StaticArray<i32> | null>([StaticArray.fromArray<i32>([10, 5]), StaticArray.fromArray<i32>([2, 6]), StaticArray.fromArray<i32>([1000, 1000]), StaticArray.fromArray<i32>([2, 2]), StaticArray.fromArray<i32>([10, 9]), StaticArray.fromArray<i32>([1000, 1000]), StaticArray.fromArray<i32>([10, 2]), StaticArray.fromArray<i32>([2, 9]), StaticArray.fromArray<i32>([1000, 1000]), StaticArray.fromArray<i32>([2, 5]), StaticArray.fromArray<i32>([10, 6]), StaticArray.fromArray<i32>([1000, 1000]), StaticArray.fromArray<i32>([7, 9]), StaticArray.fromArray<i32>([5, 2]), StaticArray.fromArray<i32>([1000, 1000]), StaticArray.fromArray<i32>([7, 2]), StaticArray.fromArray<i32>([5, 9]), StaticArray.fromArray<i32>([1000, 1000])])]);
        }
        return MineVectorData.jv_points;
    }
    static set points(value: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null) {
        MineVectorData.js_points = true;
        MineVectorData.jv_points = value;
    }
    

    jinit_MineVectorData_0(): MineVectorData {
        super.jinit_JObject_0();
        return this;
    }
}

