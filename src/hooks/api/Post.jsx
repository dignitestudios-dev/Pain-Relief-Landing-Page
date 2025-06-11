import { useContext, useState } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginAuth } = useContext(AppContext);

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    routeName,
    setRequestModal
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(
          response?.data,
          navigate,
          routeName,
          loginAuth,
          setRequestModal
        );
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginAuth } = useContext(AppContext);

  const postData = async (url, data = null, callback) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, data, loginAuth);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useForget = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, data);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    modal = false
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, modal);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useProviderCreateProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginAuth } = useContext(AppContext);

  const postData = async (url, data = null, callback, formdata) => {
    try {
      setLoading(true);
      const response = await axios.post(url, formdata);
      if (typeof callback === "function") {
        callback(response?.data, navigate, loginAuth);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useAccountRequest = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const { loginAuth } = useContext(AppContext);

  const postData = async (url, data = null, callback, setPendingModal) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);

      if (typeof callback === "function") {
        callback(response?.data, setPendingModal, loginAuth);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useSendRequest = () => {
  const [loading, setLoading] = useState(false);

  const postData = async (
    url,
    data = null,
    callback,
    modal = false,
    setUpdate,
    loginAuth
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, modal, setUpdate, loginAuth);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useAddAddresss = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    data = null,
    callback,
    modal = false,
    loginAuth
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, modal, loginAuth);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useEditAddresss = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    data = null,
    callback,
    modal = false,
    setUpdate
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, modal, setUpdate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useEditProfileProvider = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (url, data = null, callback, setUpdate) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, setUpdate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useChangePasswordProvider = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    data = null,
    callback,
    setPasswordUpdateModal
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, setPasswordUpdateModal);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useReportIssueProvider = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    data = null,
    callback,
    setReportModal,
    action
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, setReportModal, action);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useDeleteAccountProvider = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (url, data = null, callback, setDeleteModal) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, setDeleteModal);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useCreateFamilyMember = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    data = null,
    callback,
    setIsModal,
    setUpdate,
    setMembers
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, setIsModal, setUpdate, setMembers);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useCreateQuestion = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postData = async (url, data = null, callback, route) => {
    try {
      setLoading(true);
      const response = await axios.post(url, { response: data });
      if (typeof callback === "function") {
        callback(response?.data, navigate, route);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useDeleteFamilyMember = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postData = async (
    url,
    data = null,
    callback,
    setDeleteModal,
    setUpdate
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, {
        familyMemberId: data,
      });
      if (typeof callback === "function") {
        callback(response?.data, setDeleteModal, setUpdate, data);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useEditFamilyMember = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postData = async (
    url,
    data = null,
    callback,
    setEditModal,
    setMembers,
    setUpdate
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, setEditModal, setMembers, setUpdate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useEditUserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postData = async (url, data = null, callback) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      if (typeof callback === "function") {
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useCancelSubscription = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postData = async (url, data = null, callback) => {
    try {
      setLoading(true);
      const response = await axios.post(url, {
        subscriptionId: data,
      });
      if (typeof callback === "function") {
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

export {
  useLogin,
  useSignUp,
  useForget,
  useUpdatePassword,
  useProviderCreateProfile,
  useAccountRequest,
  useSendRequest,
  useAddAddresss,
  useEditAddresss,
  useEditProfileProvider,
  useChangePasswordProvider,
  useReportIssueProvider,
  useDeleteAccountProvider,
  useCreateFamilyMember,
  useCreateQuestion,
  useDeleteFamilyMember,
  useEditFamilyMember,
  useEditUserProfile,
  useCancelSubscription,
};
