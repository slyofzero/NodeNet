import { JWTKeyName } from "./constants";

// ------------------------------ API requests ------------------------------
export async function apiFetcher<T>(url: string) {
  const response = await fetch(url);
  const data = (await response.json()) as T;
  return { response: response.status, data };
}

export async function apiPoster<T>(url: string, body: any) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = (await response.json()) as T;
  return { response: response.status, data };
}

// ------------------------------ Client requests ------------------------------
export async function clientFetcher<T>(url: string) {
  const token = localStorage.getItem(JWTKeyName) || "";
  const headers = new Headers();
  headers.append("authorization", token);

  const response = await fetch(url, { headers });
  const data = (await response.json()) as T;
  return { response: response.status, data };
}

export async function clientFileDownload(url: string, fileName: string) {
  const token = localStorage.getItem(JWTKeyName) || ""; // Ensure this matches the key used to store the token
  const headers = new Headers();
  headers.append("authorization", token);

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.blob(); // Get the data as a blob
    const downloadUrl = window.URL.createObjectURL(data); // Create a URL for the blob

    const a = document.createElement("a"); // Create a link element
    a.href = downloadUrl; // Set the href to the blob URL
    a.download = fileName; // Set the default filename for the download
    document.body.appendChild(a); // Append the link to the document
    a.click(); // Simulate a click to start the download

    window.URL.revokeObjectURL(downloadUrl); // Clean up the blob URL
    document.body.removeChild(a); // Remove the link element from the document
  } catch (error) {
    console.error("Download failed:", error);
    return { response: 400 };
  }

  return { response: 200 };
}

export async function clientPoster<T>(url: string, body?: any) {
  const token = localStorage.getItem(JWTKeyName) || "";
  const headers = new Headers();
  headers.append("authorization", token);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body || {}),
    headers,
  });
  const data = (await response.json()) as T;
  return { response: response.status, data };
}
