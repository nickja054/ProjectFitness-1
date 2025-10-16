import { API_BASE_URL } from '../utils/api';

// สำหรับหน้า Home.jsx
export const apiEndpoints = {
  // Members
  getAllMembers: () => `${API_BASE_URL}/api/members`,
  getMemberById: (id) => `${API_BASE_URL}/api/members/${id}`,
  addMember: () => `${API_BASE_URL}/api/addmembers`,
  getLatestMemberId: () => `${API_BASE_URL}/api/members/latestId`,
  updateMemberStatus: (id) => `${API_BASE_URL}/api/members/${id}/status`,
  updateMember: (id) => `${API_BASE_URL}/api/members/${id}`,
  searchMembers: (query) => `${API_BASE_URL}/api/member/search?q=${query}`,
  
  // Authentication
  login: () => `${API_BASE_URL}/api/login`,
  register: () => `${API_BASE_URL}/api/Register`,
  
  // Fingerprint
  getFingerprintMembers: () => `${API_BASE_URL}/api/fingrtprints/members`,
  getRegisteredMembers: () => `${API_BASE_URL}/members/registered`,
  deleteFingerprint: () => `${API_BASE_URL}/api/fingerprint/delete`,
  enrollFingerprint: () => `${API_BASE_URL}/api/fingerprint/enroll`,
  
  // Payments
  getPayments: () => `${API_BASE_URL}/api/payments`,
  addPayment: () => `${API_BASE_URL}/api/payments`,
  
  // Daily Members
  getDailyMembers: () => `${API_BASE_URL}/api/dailymembers`,
  addDailyMember: () => `${API_BASE_URL}/api/dailymembers`,
  searchDailyMembers: (query) => `${API_BASE_URL}/api/dailymembers/search?q=${query}`,
};