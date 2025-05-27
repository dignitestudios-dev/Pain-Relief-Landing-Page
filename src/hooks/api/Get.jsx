import { useState, useEffect } from "react";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return { loading, data, pagination };
};

const useDashboardProvider = (
  url,
  filters = {},
  services,
  currentPage = 1,
  update,
  isTrue
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProvider = async () => {
    try {
      setLoading(true);

      const filterParams = new URLSearchParams({
        ...filters,
        page: currentPage, // 🔁 add currentPage to params
      }).toString();

      const serviceParams = services
        .map((service) => `services[]=${encodeURIComponent(service.id)}`)
        .join("&");

      const requestUrl = `${url}?${filterParams}&${serviceParams}`;

      const { data } = await axios.get(requestUrl);

      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isTrue === true) {
      getProvider();
    }
  }, [currentPage, update, isTrue]);

  return { loading, data, pagination };
};

const useDetailProvider = (url, id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProvider = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/${id}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProvider();
  }, []);

  return { loading, data, pagination };
};

const useTherapyType = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProvider = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProvider();
  }, []);

  return { loading, data, pagination };
};
const useProviderProfile = (url, update, setIsLocationAdded) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProviderProfile = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setIsLocationAdded(data?.data?.addresses);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProviderProfile();
  }, [update]);

  return { loading, data, pagination };
};
const useReferralFriendsProvider = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getReferralFriends = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReferralFriends();
  }, []);

  return { loading, data, pagination };
};

const useReferralCodeProvider = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getReferralCode = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReferralCode();
  }, []);

  return { loading, data, pagination };
};

export {
  useUsers,
  useDashboardProvider,
  useDetailProvider,
  useTherapyType,
  useProviderProfile,
  useReferralFriendsProvider,
  useReferralCodeProvider,
};
