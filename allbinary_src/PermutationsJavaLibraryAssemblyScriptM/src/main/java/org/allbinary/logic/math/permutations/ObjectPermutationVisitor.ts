// Generated Code Do Not Modify
// package org.allbinary.logic.math.permutations
// import org.allbinary.TsUtil
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.string.CommonSeps

@global export class ObjectPermutationVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.logic.math.permutations.ObjectPermutationVisitor";
    }
    data: StaticArray<Object | null> | null = null;
    stringBuilder: StringMaker | null = null;

    jfields_ObjectPermutationVisitor(): void {
    
    this.stringBuilder = new StringMaker().jinit_StringMaker_0();
    }
    

    jinit_ObjectPermutationVisitor_1(data: StaticArray<Object | null> | null): ObjectPermutationVisitor {
        super.jinit_Visitor_0();
        this.jfields_ObjectPermutationVisitor();
        this.data = data;
        return this;
    }
    

    visit_1_Object(anyType: Object | null): Object | null {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return null;
        this.print_2(this.data, this.stringBuilder); if (JThrowable.pending !== null) return null;
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
    

    print_1(data: StaticArray<Object | null> | null): void {
        let stringBuilder: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.print_2(data, stringBuilder); if (JThrowable.pending !== null) return;
    }
    

    print_2(data: StaticArray<Object | null> | null, stringBuilder: StringMaker | null): void {
        let tsUtil: TsUtil | null = TsUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size: i32 = data!.length;
        for (let i: i32 = 0; i < size; i++) {
            stringBuilder!.appendint(tsUtil!.hashCode1(data![i])); if (JThrowable.pending !== null) return;
            stringBuilder!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(stringBuilder))); if (JThrowable.pending !== null) return;
    }
}

