import React, { type ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { id } = useAuthStore();  
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    if (!id) {
      setIsLoading(false);  
    }
  }, [id]);

  // 로딩 중이면 아무것도 렌더링하지 않음
  if (isLoading) {
    return null;
  }

  // id가 없으면 로그인 페이지로 리디렉션
  if (!id) {
    return <Navigate to="/login" />;
  }

  // id가 있으면 자식 컴포넌트를 그대로 렌더링
  return <>{children}</>;  
};

export default ProtectedRoute;