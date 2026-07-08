/* Helper: format seconds to MM:SS or MM:SS.CC */
export function formatTime(seconds, includeMs = false) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return includeMs ? "00:00.00" : "00:00";
  }
  const whole = Math.floor(seconds);
  const minutes = Math.floor(whole / 60);
  const restSecs = whole % 60;
  const ms = Math.floor((seconds - Math.floor(seconds)) * 100);
  
  const minStr = String(minutes).padStart(2, "0");
  const secStr = String(restSecs).padStart(2, "0");
  const msStr = String(ms).padStart(2, "0");
  
  return includeMs ? `${minStr}:${secStr}.${msStr}` : `${minStr}:${secStr}`;
}

/* Helper: parse MM:SS or decimal seconds to raw seconds number */
export function parseTime(value) {
  const raw = String(value).trim();
  if (!raw) return 0;
  if (!raw.includes(":")) return Number(raw);
  const parts = raw.split(":").map(Number);
  if (parts.some((part) => Number.isNaN(part))) return NaN;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return NaN;
}

/* Helper: extract extension from file */
export function extensionFor(file) {
  const match = file?.name?.match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "mp4";
}

/* Helper: format bytes to human readable sizes */
export function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/* Helper: parse CLI args, preserving double quotes */
export function parseCommandString(cmdStr) {
  let clean = cmdStr.trim();
  if (clean.startsWith("ffmpeg ")) {
    clean = clean.substring(7);
  }
  const matches = clean.match(/(?:[^\s"']+|"[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
  return matches.map(arg => {
    if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
      return arg.slice(1, -1);
    }
    return arg;
  });
}
