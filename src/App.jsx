import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReleaseNotes from './pages/ReleaseNotes'
import Authentication from './pages/Authentication'
import UpdateReleaseNotes from './pages/UpdateReleaseNotes'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { supabase } from './supabaseClient';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [releaseData, setReleaseData] = useState();

  // Fetch release notes from the supabase server.
  const fetchReleaseNotes = async () => {
      try {
          const { data, error } = await supabase
              .from("release_notes")
              .select("*")
              .order('date', { ascending: false });

          if (error) {
              console.error("Error feching patch notes: ", error);
          } else {
              setReleaseData(data);
          }
      } catch (error) {
          console.error("Error fetching patch notes: ", error)
      } finally {
          setLoading(false)
      }
  }

  useEffect(() => {

    fetchReleaseNotes();

    // Fetch the current session.
    const fetchSession = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    }

    // Listen for changes in auth session.
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    fetchSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Handle logging out.
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      setSession(null);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ReleaseNotes currentSession={session} logout={handleLogOut} releaseData={releaseData}/>} />
          <Route path='/authentication' element={<Authentication currentSession={session} logout={handleLogOut} />} />
          <Route path='/update' element={<UpdateReleaseNotes currentSession={session} logout={handleLogOut} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
