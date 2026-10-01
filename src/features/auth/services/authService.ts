// DEMO AUTH ONLY - replace with production authentication backend (e.g., Supabase/Firebase)
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  createdAt: string;
}

const USERS_KEY = 'avenora_users';
const SESSION_KEY = 'avenora_session';

// Helper to get users
const getUsers = (): any[] => {
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveUsers = (users: any[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const authService = {
  async login(email: string, password: string):Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === btoa(password));
        if (user) {
          const { password: _, ...userWithoutPassword } = user;
          localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
          resolve(userWithoutPassword as User);
        } else {
          reject(new Error('Invalid email or password.'));
        }
      }, 800); // Simulate network delay
    });
  },

  async signup(data: Omit<User, 'id' | 'createdAt'> & { password: string }):Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        if (users.some(u => u.email === data.email)) {
          reject(new Error('An account with this email already exists.'));
          return;
        }

        const newUser = {
          ...data,
          password: btoa(data.password), // Mock hash
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
          createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        saveUsers(users);

        const { password: _, ...userWithoutPassword } = newUser;
        localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
        resolve(userWithoutPassword as User);
      }, 800);
    });
  },

  async logout():Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem(SESSION_KEY);
        resolve();
      }, 400);
    });
  },

  async getSession(): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const session = localStorage.getItem(SESSION_KEY);
          if (session) {
            resolve(JSON.parse(session) as User);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      }, 300);
    });
  },

  async updateProfile(userId: string, updates: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        const index = users.findIndex(u => u.id === userId);
        if (index > -1) {
          const updatedUser = { ...users[index], ...updates };
          users[index] = updatedUser;
          saveUsers(users);
          
          const { password: _, ...userWithoutPassword } = updatedUser;
          // Update session if it's the logged in user
          const session = localStorage.getItem(SESSION_KEY);
          if (session) {
             const currentSession = JSON.parse(session);
             if (currentSession.id === userId) {
                localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
             }
          }
          resolve(userWithoutPassword as User);
        } else {
          reject(new Error('User not found'));
        }
      }, 600);
    });
  },

  async changePassword(userId: string, currentPass: string, newPass: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        const index = users.findIndex(u => u.id === userId);
        if (index > -1) {
          if (users[index].password !== btoa(currentPass)) {
            reject(new Error('Current password is incorrect.'));
            return;
          }
          users[index].password = btoa(newPass);
          saveUsers(users);
          resolve();
        } else {
          reject(new Error('User not found'));
        }
      }, 800);
    });
  },

  async forgotPassword(email: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this sends an email. We just pretend it worked.
        // We set a dummy token in localStorage for demo purposes
        const users = getUsers();
        if (users.some(u => u.email === email)) {
           localStorage.setItem('mock_reset_token', btoa(email));
        }
        resolve();
      }, 1000);
    });
  },

  async resetPassword(token: string, newPass: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const email = atob(token);
          const users = getUsers();
          const index = users.findIndex(u => u.email === email);
          if (index > -1) {
            users[index].password = btoa(newPass);
            saveUsers(users);
            localStorage.removeItem('mock_reset_token');
            resolve();
          } else {
            reject(new Error('Invalid or expired token.'));
          }
        } catch {
          reject(new Error('Invalid token format.'));
        }
      }, 800);
    });
  }
};
