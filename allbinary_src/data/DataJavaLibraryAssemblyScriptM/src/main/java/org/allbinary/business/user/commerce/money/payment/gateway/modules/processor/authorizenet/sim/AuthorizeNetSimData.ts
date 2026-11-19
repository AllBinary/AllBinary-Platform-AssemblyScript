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
// package org.allbinary.business.user.commerce.money.payment.gateway.modules.processor.authorizenet.sim

@global export class AuthorizeNetSimData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.money.payment.gateway.modules.processor.authorizenet.sim.AuthorizeNetSimData";
    }
    @lazy static readonly X_FP_HASH: string | null = "x_fp_hash";
    @lazy static readonly X_FP_SEQUENCE: string | null = "x_fp_sequence";
    @lazy static readonly X_FP_TIMESTAMP: string | null = "x_fp_timestamp";
    @lazy static readonly X_SHOW_FORM: string | null = "x_show_form";
    @lazy static readonly X_HEADER_HTML_PAYMENT_FORM: string | null = "x_header_html_payment_form";
    @lazy static readonly X_FOOTER_HTML_PAYMENT_FORM: string | null = "x_footer_html_payment_form";
    @lazy static readonly X_HEADER_HTML_RECEIPT: string | null = "x_header_html_receipt";
    @lazy static readonly X_FOOTER_HTML_RECEIPT: string | null = "x_footer_html_receipt";
    @lazy static readonly X_RECEIPT_LINK_TEXT: string | null = "x_receipt_link_text";
    @lazy static readonly X_RECEIPT_LINK_URL: string | null = "x_receipt_link_url";
    @lazy static readonly X_LOGO_URL: string | null = "x_logo_url";
    @lazy static readonly X_BACKGROUND_URL: string | null = "x_background_url";
    @lazy static readonly X_COLOR_BACKGROUND: string | null = "x_color_background";
    @lazy static readonly X_COLOR_LINK: string | null = "x_color_link";
    @lazy static readonly X_COLOR_TEXT: string | null = "x_color_text";
    @lazy static readonly X_RELAY_URL: string | null = "x_relay_url";
    

    jinit_AuthorizeNetSimData_0(): AuthorizeNetSimData {
        super.jinit_JObject_0();
        return this;
    }
}

