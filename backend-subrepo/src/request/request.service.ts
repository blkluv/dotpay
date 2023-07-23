import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { RequestDocument } from './request.schema';

@Injectable()
export class RequestService {
    constructor(@InjectModel('request') private readonly model: Model<RequestDocument>) { }

    async create(data: any) {
        return await new this.model({ ...data }).save();
    }

    async findAll() {
        return await this.model.find().exec();
    }

    async findOne() {
        return await this.model.find().sort({ _id: -1 }).limit(1).exec();
    }

    async update(owner, data) {
        return await this.model.findOneAndUpdate(owner, data, { new: true }).exec();
    }

    async updateById(_id, data) {
        return await this.model.findByIdAndUpdate(_id, data, { new: true }).exec();
    }

    async findByOwner(owner) {
        return await this.model.find({ owner }).exec();
    }
    async findById(_id) {
        return await this.model.findById({ _id }).exec();
    }

    async findByEmissary(emissary) {
        return await this.model.find({ emissary }).exec();
    }

    async deleteById(_id) {
        return await this.model.findByIdAndDelete({ _id }).exec();
    }

}
