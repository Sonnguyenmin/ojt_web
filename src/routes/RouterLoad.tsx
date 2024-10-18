import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function RouterLoad() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyFn(() => import('../pages/home/Home'))}>
          <Route index element={lazyFn(() => import('../pages/home/HomeContent'))}></Route>
          <Route path="jobs" element={lazyFn(() => import('../pages/jobs/Job'))}>
            <Route index element={lazyFn(() => import('../pages/jobs/interview/InterView'))}></Route>
            <Route path="jobInfo" element={lazyFn(() => import('../pages/jobs/jobInfo/JobInfo'))}></Route>
            <Route path="jobPosting" element={lazyFn(() => import('../pages/jobs/jobPosting/JobPosting'))}></Route>
          </Route>
          <Route path="resume" element={lazyFn(() => import('../pages/resume/Resume'))}></Route>
          <Route path="about" element={lazyFn(() => import('../pages/about/About'))}></Route>
          <Route path="contact" element={lazyFn(() => import('../pages/contact/Contact'))}></Route>
          {/* Route cho user-info */}
          <Route path="user-info" element={lazyFn(() => import('../pages/userInfo/UserInfo'))}>
            {/* Route con cho UserInfo */}
            <Route path="user-detail" element={lazyFn(() => import('../pages/userInfo/userDetail/UserDetail'))}></Route>
            <Route
              path="changePass"
              element={lazyFn(() => import('../pages/userInfo/userChangePass/ChangePass'))}
            ></Route>
          </Route>
        </Route>
        <Route path="/login" element={lazyFn(() => import('../pages/auth/login/Login'))}></Route>
        <Route path="/register" element={lazyFn(() => import('../pages/auth/register/Register'))}></Route>
        <Route path="/test" element={lazyFn(() => import('../pages/auth/test/test'))}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const lazyFnDelay = (importFunc: any) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });

  return (
    <Suspense fallback={<>Loading ....</>}>
      <LazyComponent />
    </Suspense>
  );
};

const lazyFn = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<>Loading ....</>}>
      <LazyComponent />
    </Suspense>
  );
};
