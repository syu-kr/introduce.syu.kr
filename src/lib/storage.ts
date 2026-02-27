import { promises as fs } from "fs";
import path from "path";

export interface Application {
  id: string;
  name: string;
  studentId: string;
  department: string;
  year: string;
  phone: string;
  email: string;
  github?: string;
  skills?: string;
  projects?: string;
  collaboration?: string;
  motivation: string;
  ideas?: string;
  submittedAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const APPLICATIONS_FILE = path.join(DATA_DIR, "applications.json");

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // 디렉토리가 이미 존재하는 경우
  }
}

async function readApplications(): Promise<Application[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(APPLICATIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // 파일이 없으면 빈 배열 반환
    return [];
  }
}

async function saveApplications(applications: Application[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(
    APPLICATIONS_FILE,
    JSON.stringify(applications, null, 2),
    "utf-8",
  );
}

export async function saveApplication(
  app: Omit<Application, "id" | "submittedAt">,
): Promise<Application> {
  const applications = await readApplications();

  const newApplication: Application = {
    ...app,
    id: `app_${Date.now()}`,
    submittedAt: new Date().toISOString(),
  };

  applications.push(newApplication);
  await saveApplications(applications);

  return newApplication;
}

export async function getApplications(): Promise<Application[]> {
  return readApplications();
}

export async function getApplicationById(
  id: string,
): Promise<Application | null> {
  const applications = await readApplications();
  return applications.find((app) => app.id === id) || null;
}

export async function deleteApplication(id: string): Promise<boolean> {
  const applications = await readApplications();
  const filteredApplications = applications.filter((app) => app.id !== id);

  if (filteredApplications.length === applications.length) {
    return false; // 해당 ID를 찾지 못함
  }

  await saveApplications(filteredApplications);
  return true;
}
