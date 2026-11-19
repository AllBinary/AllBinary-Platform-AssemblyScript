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
// package org.allbinary.logic.io.file.visitor
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.util.visitor.VisitorInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class BooleanFileVisitor extends JObject implements VisitorInterface {

    jclassName(): string {
        return "org.allbinary.logic.io.file.visitor.BooleanFileVisitor";
    }
    commonStrings: CommonStrings | null = null;
    filterStringBasicArrayList: BasicArrayList | null = null;

    jfields_BooleanFileVisitor(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.filterStringBasicArrayList = null;
    }
    

    jinit_BooleanFileVisitor_1(filterStringBasicArrayList: BasicArrayList | null): BooleanFileVisitor {
        super.jinit_JObject_0();
        this.jfields_BooleanFileVisitor();
        this.setFilterStringBasicArrayList(filterStringBasicArrayList); if (JThrowable.pending !== null) return this;
        PreLogUtil.put(jstr("Filter BasicArrayList: ") + jstr(JObject.jtoString(this.getFilterStringBasicArrayList())), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    visit(anyType: Object | null): Object | null {
        return changetype<Object | null>(this.visit_1_AbFile(changetype<AbFile | null>(anyType)));
    }
    

    visit_1_AbFile(file: AbFile | null): JBoolean | null {
        let list: BasicArrayList | null = this.getFilterStringBasicArrayList(); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        let nextFileFilterString: string | null = null;
        for (let index: i32 = 0; index < size; index++) {
            nextFileFilterString = changetype<string | null>(list!.get(index)); if (JThrowable.pending !== null) return null;
            if (this.visit_2(file, nextFileFilterString)!.booleanValue()) {
                return changetype<JBoolean | null>(jbox<bool>(true));
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<JBoolean | null>(jbox<bool>(false));
    }
    

    getFilterStringBasicArrayList(): BasicArrayList | null {
        return this.filterStringBasicArrayList;
    }
    

    setFilterStringBasicArrayList(filterStringBasicArrayList: BasicArrayList | null): void {
        this.filterStringBasicArrayList = filterStringBasicArrayList;
    }
    

    visit_2(file: AbFile | null, fileNameString: string | null): JBoolean | null {
        return changetype<JBoolean | null>(jbox<bool>(false));
    }
}

