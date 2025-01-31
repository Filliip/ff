export const getAllprogrammer = async () => {
  const req = await fetch("http://localhost:3000/programmer", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const getprogrammerById = async (id) => {
  const req = await fetch(`http://localhost:3000/programmer/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const createprogrammer = async (formData) => {
  const req = await fetch(`http://localhost:3000/programmer/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const updateprogrammer = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/programmer/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
export const deleteprogrammer = async (id) => {
  const req = await fetch(`http://localhost:3000/programmer/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    message: data.message,
    payload: data.payload,
  };
};
