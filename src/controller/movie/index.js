let { 
  MovieModel,
} = require('../../db/model/movie_model');
let {
  errorThrow,
} = require('../../conf/connect')

const findMovieExist = ({ id, name }) => {
  return id ? MovieModel.find({ id: id }) : MovieModel.find({ name: name });
}

const editMovieQuest = async (data, type) => {
  const { id, name, dec } = data;
  if (type === 'add') {
    const movieDoc = new MovieModel({
      name,
      dec,
    })
    return movieDoc.save();
  }
  
  if (type === 'edit' ) {
    const movieList = await findMovieExist({ 
      id, 
    })
  }
  if (!name || !dec) {
    return errorThrow('信息需要补全');
  }
  
  if (movieList.length === 0) {
    
  } else {
    return errorThrow('账号已存在');
  }
}

const getMovieInfoQuest = async (query) => {
  const { id, name } = query;
  const findQuery = id ? { id }: { name };
  const movieList = await findUserExist(findQuery);
  return id ? movieList[0] : movieList;
}

const deleteMovieQuest = async (query) => {
  const { id } = query;
  const movie = await findUserExist({ 
    id,
  })[0]
  if (userList.length === 0) {
    return returnData({},'登陆成功')
  } else {
    return errorThrow('登录失败');
  }
}

module.exports = {
  '/movie/add': editMovieQuest.bind(this, 'add'),
  '/movie/delete': deleteMovieQuest,
  '/movie/info': getMovieInfoQuest,
  '/movie/edit': editMovieQuest.bind(this, 'edit'),
}