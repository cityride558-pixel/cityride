/**
 * CityRide Platform - Mobile API Configuration
 * 
 * This file tells the app where the backend server is located.
 */

// App mode - modified during native compilation
window.APP_MODE = 'web';

// Use the production Railway backend URL
const PRODUCTION_URL = "https://cityrides.up.railway.app";

// Auto-detect Local vs Production environment
// However, inside Cordova apps (which run under file:// protocol, local webviews,
// or have window.APP_MODE set to a specific portal mode like customer/driver/admin/vendor),
// we MUST force the production API URL.
const isCordova = window.cordova || 
                  window.location.protocol === 'file:' || 
                  (window.APP_MODE && window.APP_MODE !== 'web');

const isLocal = !isCordova && (
                window.location.hostname === "localhost" || 
                window.location.hostname === "127.0.0.1" || 
                window.location.hostname.startsWith("192.168.") || 
                window.location.hostname.startsWith("10."));

const API_BASE_URL = isLocal ? "" : PRODUCTION_URL;

console.log("🚀 CityRide Engine - API Root:", API_BASE_URL);
