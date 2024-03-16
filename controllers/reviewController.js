const Review = require('../models/Review');
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { checkPermissions } = require('../utils');

const createReview = async (req, res) => {
  const { product: productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId });
  if(!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`)
  }

  const alreadySubmitted = await Review.findOne({ _id: productId})
  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
  res.send('create review');
};
const getAllReviews = async (req, res) => {
  res.send('get all reviews');
};
const getSingleReview = async (req, res) => {
  res.send('get single review');
};
const updateReview = async (req, res) => {
  res.send('update review');
};
const deleteReview = async (req, res) => {
  res.send('delete review');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
