class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password= (password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(32)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(32)
        self.save!
        self.session_token
    end

end