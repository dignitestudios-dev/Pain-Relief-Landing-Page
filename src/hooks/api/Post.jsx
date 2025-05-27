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
    console.log("🚀 ~ postData ~ formdata:", formdata);
    try {
      setLoading(true);
      const response = await axios.post(url, data);
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

  const postData = async (url, data = null, callback, modal = false) => {
    try {
      setLoading(true);
      const response = await axios.post(url, data);
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

export {
  useLogin,
  useSignUp,
  useForget,
  useUpdatePassword,
  useProviderCreateProfile,
  useAccountRequest,
};
