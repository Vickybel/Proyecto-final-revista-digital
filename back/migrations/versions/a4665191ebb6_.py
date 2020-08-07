"""empty message

Revision ID: a4665191ebb6
Revises: 
Create Date: 2020-08-07 21:20:03.369453

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a4665191ebb6'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=200), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('last_name', sa.String(length=200), nullable=False),
    sa.Column('date', sa.String(length=200), nullable=False),
    sa.Column('avatar', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('banners',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('size', sa.String(length=200), nullable=False),
    sa.Column('body', sa.String(length=100), nullable=False),
    sa.Column('admin_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['admin_id'], ['admins.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carousels',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('size', sa.String(length=200), nullable=False),
    sa.Column('body', sa.String(length=100), nullable=False),
    sa.Column('admin_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['admin_id'], ['admins.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('premiums',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=200), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('invoice',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email_paypal', sa.String(length=200), nullable=False),
    sa.Column('payment', sa.String(length=200), nullable=False),
    sa.Column('date', sa.String(length=200), nullable=False),
    sa.Column('validity', sa.String(length=200), nullable=False),
    sa.Column('premium_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['premium_id'], ['premiums.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('magazines',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_type', sa.String(length=200), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('date', sa.String(length=200), nullable=False),
    sa.Column('body', sa.String(length=200), nullable=False),
    sa.Column('glance', sa.String(length=200), nullable=False),
    sa.Column('premium_id', sa.Integer(), nullable=False),
    sa.Column('admin_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['admin_id'], ['admins.id'], ),
    sa.ForeignKeyConstraint(['premium_id'], ['premiums.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('magazines')
    op.drop_table('invoice')
    op.drop_table('premiums')
    op.drop_table('carousels')
    op.drop_table('banners')
    op.drop_table('users')
    op.drop_table('admins')
    # ### end Alembic commands ###