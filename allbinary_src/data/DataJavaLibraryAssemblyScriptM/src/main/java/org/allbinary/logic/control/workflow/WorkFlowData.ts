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
// package org.allbinary.logic.control.workflow

@global export class WorkFlowData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.control.workflow.WorkFlowData";
    }
    @lazy static jv_instance: WorkFlowData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): WorkFlowData | null {
        if (!WorkFlowData.js_instance) {
            WorkFlowData.js_instance = true;
            WorkFlowData.jv_instance = new WorkFlowData().jinit_WorkFlowData_0();
        }
        return WorkFlowData.jv_instance;
    }
    static set instance(value: WorkFlowData | null) {
        WorkFlowData.js_instance = true;
        WorkFlowData.jv_instance = value;
    }
    WORKFLOWS: string | null = null;
    WORKFLOW: string | null = null;
    NAME: string | null = null;
    DATA: string | null = null;

    jfields_WorkFlowData(): void {
    this.WORKFLOWS = "WORKFLOWS";
    this.WORKFLOW = "WORKFLOW";
    this.NAME = "WORKFLOW_NAME";
    this.DATA = "WORKFLOW_DATA";
    }
    

    static getInstance(): WorkFlowData | null {
        return WorkFlowData.instance;
    }
    

    jinit_WorkFlowData_0(): WorkFlowData {
        super.jinit_JObject_0();
        this.jfields_WorkFlowData();
        return this;
    }
}

