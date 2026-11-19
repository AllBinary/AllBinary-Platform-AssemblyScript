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
// package org.allbinary.midlet
// import org.allbinary.canvas.Processor
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.ClientInformationFactory
// import org.allbinary.thread.PrimaryThreadPool
// import org.allbinary.thread.ThreadPool

//J2MEForJ2ME
@global export class ProgressMidlet extends AllBinaryMidlet {

    jclassName(): string {
        return "org.allbinary.midlet.ProgressMidlet";
    }
    abeClientInformation: AbeClientInformationInterface | null = null;

    jfields_ProgressMidlet(): void {
    
    }
    

    jinit_ProgressMidlet_1(clientInformationFactory: ClientInformationFactory | null): ProgressMidlet {
        super.jinit_AllBinaryMidlet_0();
        this.jfields_ProgressMidlet();
        this.preInit(); if (JThrowable.pending !== null) return this;
        this.abeClientInformation = clientInformationFactory!.getInstance(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    preInit(): void {
    }
    

    exitProgress(isProgress: bool): void {
        let processor: Processor | null = MidletExitProcessorFactory.getInstance()!.getExitInstance(this); if (JThrowable.pending !== null) return;
        do {
            let primaryThreadPool: ThreadPool | null = PrimaryThreadPool.getInstance(); if (JThrowable.pending !== null) break;
            let runnable: JRunnable | null = new ExitRunnable().jinit_ExitRunnable_3(this, processor, isProgress); if (JThrowable.pending !== null) break;
            primaryThreadPool!.runTask(runnable); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "exit", e); if (JThrowable.pending !== null) return;
            do {
                processor!.process(); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e2: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "exit", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

