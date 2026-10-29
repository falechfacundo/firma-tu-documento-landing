// URL de la aplicación. Se puede sobreescribir por entorno.
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL ?? 'https://app.firmatu.com';
export const REGISTER_URL = `${APP_URL}/sign-up`;
export const LOGIN_URL = `${APP_URL}/sign-in`;
// El correo se configura cuando esté definido el canal comercial.
export const CONTACT_EMAIL: string = import.meta.env.PUBLIC_CONTACT_EMAIL ?? '';
export const SITE_NAME = 'Firma tu Documento';
