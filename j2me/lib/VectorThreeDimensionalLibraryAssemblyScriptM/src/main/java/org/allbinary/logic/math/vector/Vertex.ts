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
// package org.allbinary.logic.math.vector
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonSeps

@global export class Vertex extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.vector.Vertex";
    }
    x: BasicDecimal | null = null;
    y: BasicDecimal | null = null;
    z: BasicDecimal | null = null;

    jfields_Vertex(): void {
    this.x = new BasicDecimal().jinit_BasicDecimal_1(0);
    this.y = new BasicDecimal().jinit_BasicDecimal_1(0);
    this.z = new BasicDecimal().jinit_BasicDecimal_1(0);
    }
    

    jinit_Vertex_0(): Vertex {
        super.jinit_JObject_0();
        this.jfields_Vertex();
        return this;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let positionStrings: PositionStrings | null = PositionStrings.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.X_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.x)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Y_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.y)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Z_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.z)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

