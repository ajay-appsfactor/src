"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useCurrencies() {
  const [state, setState] = useState({
    currencies: [],
    loading: true,
    error: null,
  });

  const fetchCurrencies = async () => {
    try {
      setState(prev => ({...prev, loading: true}));
      const res = await fetch("/api/master-list/currency");
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Failed to fetch currencies");
      
      setState({
        currencies: data.data || [],
        loading: false,
        error: null
      });
    } catch (error) {
      toast.error(error.message);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return {
    ...state,
    refetch: fetchCurrencies
  };
}