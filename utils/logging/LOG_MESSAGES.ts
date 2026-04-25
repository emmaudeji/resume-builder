export const LOG_MESSAGES = {
  // ============================================================
  // ✅ SUCCESS
  // ============================================================
  SUCCESS: {
    DEFAULT: "Operation completed successfully.",
    ACCOUNT_CREATED: "User account created successfully.",
    PROFILE_UPDATED: "Profile updated successfully.",
    WORKSPACE_OPENED: "Workspace loaded successfully.",
    RECORD_CREATED: "Record added successfully.",
    RECORD_UPDATED: "Changes saved successfully.",
    RECORD_DELETED: "Record removed successfully.",
    PASSWORD_CHANGED: "Password updated successfully.",
    EMAIL_SENT: "Notification sent successfully.",
    LOGIN_SUCCESS: "Login successful. Welcome back.",
    LOGOUT_SUCCESS: "You have been logged out.",
    FILE_UPLOADED: "File uploaded successfully.",
    BULK_UPLOAD_SUCCESS: "Bulk upload completed successfully.",
  },

  // ============================================================
  // ⚠️ WARNINGS
  // ============================================================
  WARNING: {
    DEFAULT: "Please review the information provided.",
    NETWORK: "Network connection is unstable.",
    UNSAVED_CHANGES: "You have unsaved changes.",
    LIMIT_REACHED: "You have reached the allowed limit.",
    INCOMPLETE_FORM: "Please complete all required fields.",
    LOW_STORAGE: "Storage space is running low.",
    RATE_LIMIT: "Too many requests. Please try again shortly.",
    DEPRECATED: "This feature will be removed soon.",
  },

  // ============================================================
  // ❌ ERRORS
  // ============================================================
  ERROR: {
    DEFAULT: "An error occurred. Please try again.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    FORBIDDEN: "Access denied for this operation.",
    NOT_FOUND: "Requested resource was not found.",
    PAGE_NOT_FOUND: "The page you are looking for does not exist.",
    SERVER: "Server error. Please try again later.",
    VALIDATION: "Invalid input. Please check and try again.",
    CONNECTION: "Unable to connect to the server.",
    CREATE_FAILED: "Failed to create record.",
    UPDATE_FAILED: "Failed to update record.",
    DELETE_FAILED: "Failed to delete record.",
    AUTH_FAILED: "Invalid credentials.",
    SIGNUP_FAILED: "Unable to create account at this time.",
    TOKEN_EXPIRED: "Session expired. Please log in again.",
    FILE_UPLOAD_ERROR: "File upload failed.",
  },

  // ============================================================
  // ℹ️ INFO / STATUS
  // ============================================================
  INFO: {
    DEFAULT: "System is running normally.",
    LOADING: "Loading data...",
    SAVING: "Saving changes...",
    PROCESSING: "Processing request...",
    SEARCHING: "Searching records...",
    FETCHING: "Fetching data...",
    SYNCING: "Syncing data...",
    BACKUP_COMPLETE: "Backup completed successfully.",
  },

  // ============================================================
  // 💬 PROMPTS / CONFIRMATIONS
  // ============================================================
  PROMPT: {
    DELETE_CONFIRM: "Are you sure you want to delete this record?",
    LOGOUT_CONFIRM: "Are you sure you want to log out?",
    DISCARD_CHANGES: "Discard unsaved changes?",
    CONFIRM_ACTION: "Please confirm this action.",
    CONFIRM_SUBMIT: "Submit this form?",
  },

  // ============================================================
  // 📊 SYSTEM ACTIVITY
  // ============================================================
  ACTIVITY: {
    ACTION_RECORDED: "Activity recorded.",
    PAGE_VIEW: "Page accessed.",
    USER_SESSION_START: "User session started.",
    USER_SESSION_END: "User session ended.",
  },

  // ============================================================
  // 👮 SECURITY & AUDIT
  // ============================================================
  SECURITY: {
    LOGIN_ATTEMPT: "Login attempt detected.",
    ROLE_UPDATED: "User role updated.",
    PERMISSION_UPDATED: "Permissions updated.",
    PASSWORD_RESET_REQUEST: "Password reset requested.",
    ACCOUNT_LOCKED: "Account locked due to multiple failed attempts.",
    SUSPICIOUS_ACTIVITY: "Suspicious activity detected.",
  },

  // ============================================================
  // ⚙️ SYSTEM EVENTS
  // ============================================================
  SYSTEM: {
    STARTED: "System started successfully.",
    STOPPED: "System stopped.",
    RESTARTED: "System restarted.",
    TASK_EXECUTED: "Scheduled task executed.",
    CACHE_CLEARED: "Cache cleared.",
    DB_CONNECTED: "Database connected.",
    DB_DISCONNECTED: "Database disconnected.",
  },
};