import { useEffect } from 'react'
import Router from 'next/router'
import useSWR, { mutate } from 'swr';

export  function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR('/api/user');
  const loading = !user;
  useEffect(() => {

    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      localStorage.setItem('token',user.token)
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser,loading }
}

export  function useScore(){
  const { data, mutate } = useSWR("/api/game/scorelist");
  const loading = !data;
  const scores = data && data.score
  return {
    loading,
    scores,
    mutate
  }
}
